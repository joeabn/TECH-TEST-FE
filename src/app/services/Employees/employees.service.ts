import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseUrl = "https://617aea45cb1efe00170100ad.mockapi.io/api";
  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Array<Employee>>{
    return this.http.get<Array<Employee>>(`${this.baseUrl}/employees`);
  }

  getEmployeeById(id : number) : Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/employees/${id}`);
  }
}
