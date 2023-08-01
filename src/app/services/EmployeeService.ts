import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Employee from '../models/Employee';
import Department from '../models/Department';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:9080/restservice/api/employees";
  }


  getAllEmployees(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getEmployees(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postEmployees(data: any): boolean {
    try {
      this.http.post(this.baseUrl, data).subscribe();
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  putEmployees(id: number, data: any): boolean {
    console.log(id);
    console.log(data);
    debugger;
    try {
      this.http.put(`${this.baseUrl}/${id}`,data).subscribe( data => {
        console.log(data);
      });
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  deleteEmployees(id: number): boolean {
    console.log("Deleting Employee: " + id);
    try {
      this.http.delete(`${this.baseUrl}/${id}`).subscribe();
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

}
