import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!:FormGroup;

  constructor(private fb:FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  get emailFormControl(): FormControl {
    return this.formGroup?.get('email') as FormControl;
  }
  get passwordFormControl(): FormControl {
    return this.formGroup?.get('password') as FormControl;
  }
  ngOnInit(): void {
    this.formGroup=this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });

  }
  onSubmit(): void{
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

    this.authService.login$(this.formGroup.value).subscribe({
      next: (response) =>{
        if(response){
          this.authService.storeUserData(response);

          this.router.navigate(['/']);
        }
      }
    })

  }

}
