import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Advertisement} from "../models/advertisement.models";

@Injectable({
  providedIn:'root'
})
export class AdvertisementsService{
  private url = `${environment.apiUrl}/advertisements`;

  constructor(private http:HttpClient) {

  }

  getAdvertisements$(): Observable<Advertisement[]>{
    return this.http.get<Advertisement[]>(this.url);
  }
  getAdvertisementById$(id: number): Observable<Advertisement>{
    const url= `${this.url}/${id}`;
    return this.http.get<Advertisement>(url);
  }
  postAdvertisements$(adv:Advertisement):Observable<Advertisement>{
    return this.http.post<Advertisement>(this.url,adv);
  }
  putAdvertisement$(adv:Advertisement):Observable<Advertisement>{
    const url = `${this.url}/${adv.id}`;
    return this.http.put<Advertisement>(url,adv);
  }
  deleteAdvertisement$(id:number):Observable<void>{
    const url= `${this.url}/${id}`;
    return this.http.delete<void>(url);
  }
}
