import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
baseUrl = environment.baseUrl
  constructor( private httpClient:HttpClient) {

   }
  
     register(form: any) {
    return this.httpClient.post(this.baseUrl + "Account/Register", form);
  }

  Login(form:any){
    return this.httpClient.post(this.baseUrl + "Account/Login", form);
  }
}
