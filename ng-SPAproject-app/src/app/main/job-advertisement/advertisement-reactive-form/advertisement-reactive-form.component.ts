import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Advertisement} from "../../models/advertisement.models";
import {AdvertisementsService} from "../../services/advertisements.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {of, Subject, switchMap, takeUntil} from "rxjs";

@Component({
  selector: 'app-advertisement-reactive-form',
  templateUrl: './advertisement-reactive-form.component.html',
  styleUrls: ['./advertisement-reactive-form.component.scss']
})
export class AdvertisementReactiveFormComponent implements OnInit, OnDestroy {
  formGroup!: FormGroup;

  advertisement: Advertisement;

  destroy$ = new Subject<boolean>();


  constructor(private fb: FormBuilder,
              private advService: AdvertisementsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.advertisement = {
      title: '',
      description: '',
      typeJob: '',
      position: '',
      category: ''
    };
  }

  get titleFormControl(): FormControl {
    return this.formGroup?.get('title') as FormControl;
  }

  get descriptionFormControl(): FormControl {
    return this.formGroup?.get('description') as FormControl;
  }

  get positionFormControl(): FormControl {
    return this.formGroup?.get('position') as FormControl;
  }

  get typeJobFormControl(): FormControl {
    return this.formGroup?.get('typeJob') as FormControl;
  }

  get categoryFormControl(): FormControl {
    return this.formGroup?.get('category') as FormControl;
  }


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params: Params) => {
          if (params['id']) {
            return this.advService.getAdvertisementById$(params['id']);
          }
          this.initForm();
          return of(null);
        }
      ),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (response) => {
        if (response) {
          this.advertisement = response;
          this.initForm();
        }
      }
    });

  }

  private initForm(): void {
    this.formGroup = this.fb.group({
      id: this.advertisement.id,
      title: [this.advertisement.title, [Validators.required, Validators.maxLength(500)]],
      description: [this.advertisement.description, [Validators.required, Validators.minLength(20)]],
      position: [this.advertisement.position, [Validators.required, Validators.maxLength(500)]],
      typeJob: [this.advertisement.typeJob, [Validators.required, Validators.maxLength(200)]],
      category: [this.advertisement.category, [Validators.required, Validators.maxLength(200)]]
    });
  }

  ngOnSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    const advert: Advertisement = {
      id: this.formGroup.value.id,
      title: this.formGroup.value.title,
      description: this.formGroup.value.description,
      position: this.formGroup.value.position,
      typeJob: this.formGroup.value.typeJob,
      category: this.formGroup.value.category
    }
    let request$;
    if (advert.id) {
      request$ = this.advService.putAdvertisement$(advert);
    } else {
      request$ = this.advService.postAdvertisements$(advert);

    }
    request$.subscribe({
      next: () => {
        this.router.navigate(['/advertisements']);
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
