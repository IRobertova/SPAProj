import {Component, OnInit} from '@angular/core';
import {Advertisement} from './models/advertisement.models';
import {AdvertisementsService} from "./services/advertisements.service";
import {map, take} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent{


  constructor() {

  }


}
