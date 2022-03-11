import {NgModule} from "@angular/core";
import {AdvertisementItemComponent} from "./job-advertisement/advertisement-item/advertisement-item.component";
import {
  AdvertisementReactiveFormComponent
} from "./job-advertisement/advertisement-reactive-form/advertisement-reactive-form.component";
import {AdvertisementsComponent} from "./job-advertisement/advertisements/advertisements.component";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppModule} from "../app.module";
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    AdvertisementItemComponent,
    AdvertisementReactiveFormComponent,
    AdvertisementsComponent
  ]
})
export class MainModule {

}
