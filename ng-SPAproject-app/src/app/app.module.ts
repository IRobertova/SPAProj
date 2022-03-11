import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import {FooterComponent} from "./footer/footer.component";
import { ReactiveFormsModule} from "@angular/forms";
import { AdvertisementItemComponent } from './main/job-advertisement/advertisement-item/advertisement-item.component';
import { AdvertisementReactiveFormComponent } from './main/job-advertisement/advertisement-reactive-form/advertisement-reactive-form.component';
import {HttpClientModule} from "@angular/common/http";
import { AdvertisementsComponent } from './main/job-advertisement/advertisements/advertisements.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
