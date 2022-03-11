import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdvertisementsComponent} from "./main/job-advertisement/advertisements/advertisements.component";
import {
  AdvertisementReactiveFormComponent
} from "./main/job-advertisement/advertisement-reactive-form/advertisement-reactive-form.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canLoad: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
