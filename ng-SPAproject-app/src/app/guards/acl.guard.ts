import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../auth/service/auth.service";

@Injectable({
  providedIn:'root'
})
export class AclGuard implements CanActivate{

  constructor(private authService:AuthService,
              private router:Router) {
  }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const loggedUser = this.authService.getUserFromStorage();

      if(loggedUser.role!=='Organisation'){
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
}
