import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, of} from "rxjs";
import {User} from "../models/user.model";
import {Login} from "../models/login.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {

  }

  login$(data: Login): Observable<User|null> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`).pipe(
      map((response: User[]) => {
        const user = response.find(u => u.email === data.email
          && u.password === data.password);
        if (user) {
          return user;
        }
        return null;
      })
    );
  }
  storeUserData(user: User): void{
    delete user.password;
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }
  getUserFromStorage(): User{
    return JSON.parse(localStorage.getItem('loggedUser')!);

  }
  logOut(): void{
    localStorage.removeItem('loggedUser');
  }
}
