import { Component, OnInit } from '@angular/core';
import {Advertisement} from "../../models/advertisement.models";
import {AdvertisementsService} from "../../services/advertisements.service";
import {map, take} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss']
})
export class AdvertisementsComponent implements OnInit {
  advertisements!: Advertisement[];
  errorMessage! :string;
  appliedAdv!: Advertisement;

  constructor(private advertService:AdvertisementsService) { }

  ngOnInit(): void {
    this.getAdvertisements();

  }
  private getAdvertisements(): void{
    this.advertService.getAdvertisements$().pipe(
      map((response: Advertisement[]) => {
        const sortedResponse = response.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title){
            return 1;
          }
          return 0;
        });
        return sortedResponse;
      }),
      take(1)
    ).subscribe({
      next: (response: Advertisement[]) => {
        this.advertisements = response;

      },
      error:(response:HttpErrorResponse)=>{
        this.errorMessage=response.message;
      }
    });

  }
  onApply(adv: Advertisement): void {
    this.appliedAdv = adv;
  }
  onAdvDelete(advId:number): void{
    this.advertService.deleteAdvertisement$(advId).subscribe({
      next:() =>{
        this.advertisements=this.advertisements.filter(advertisement => advertisement.id !=advId);
      }
    });
  }
  onListUpdate(): void{
    this.getAdvertisements();
  }
}
