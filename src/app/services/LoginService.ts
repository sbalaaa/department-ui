import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl: string;

  constructor(private http: HttpClient) {
    this.loginUrl = "http://localhost:9080/restservice/api/login";
  }

  login(loginData: any): Observable<any> {
    console.log(loginData);
    return this.http.post(this.loginUrl , loginData);
  }



}
