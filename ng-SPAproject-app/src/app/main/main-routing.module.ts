import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdvertisementsComponent} from "./job-advertisement/advertisements/advertisements.component";
import {
  AdvertisementReactiveFormComponent
} from "./job-advertisement/advertisement-reactive-form/advertisement-reactive-form.component";
import {MainComponent} from "./main.component";
import {AclGuard} from "../guards/acl.guard";
import {AuthGuard} from "../guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'advertisements',
        component: AdvertisementsComponent,
        canLoad:[AuthGuard]
      }, {
        path: 'advertisements/create',
        component: AdvertisementReactiveFormComponent,
        canActivate: [AclGuard]
      },
      {
        path: 'advertisements/edit/:id',
        component: AdvertisementReactiveFormComponent,
        canActivate:[AclGuard]
      },{
        path: '',
        pathMatch: 'full',
        redirectTo:'advertisements'
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MainRoutingModule {


}
