import {CanLoad, Route, Router, UrlSegment} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../auth/service/auth.service";

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanLoad{
  constructor(
    private router:Router,
    private authService:AuthService
  ) {
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean{

    const loggedUser = this.authService.getUserFromStorage();
    if(!loggedUser){
      this.router.navigate(['/auth','login']);
      return false;
    }
    return true;
  }
}
