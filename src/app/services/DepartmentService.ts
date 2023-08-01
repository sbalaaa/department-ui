import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Department from 'src/app/models/Department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:9080/restservice/api/departments";
  }


  getAllDepartments(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

 

  getDepartments(id: number): Observable<any> {
    
    console.log("from service" + id);
    return this.http.get(`${this.baseUrl}/${id}`);

  }

  postDepartments(data: any): boolean {
    try {
      this.http.post(this.baseUrl, data).subscribe( data => {
      });
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  putDepartments(id: number, data: any): boolean {
    // return this.http.put(this.baseUrl + "/departments" + `/${id}`, data);
    console.log("department will be updated " + id);
    console.log("department will be updated " + data);
    debugger;
    try {
      this.http.put(`${this.baseUrl}/${id}`,data).subscribe(data => { 
      })
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  deleteDepartments(id: number): boolean {
    try {
      this.http.delete(`${this.baseUrl}/${id}`).subscribe(data => { 
      })
      return true;
    } catch(e) {
      console.log(e);
      //debugger;
      return false;
    }
    
  }

 

}
