import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../auth/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  loggedUser!: string;
  constructor(private authService:AuthService,
              private router: Router) {
    this.loggedUser= JSON.parse(localStorage.getItem('loggedUser')!);

  }


  onLogOut(): void{
    this.authService.logOut();
    this.router.navigate(['/auth','login']);
  }
}
