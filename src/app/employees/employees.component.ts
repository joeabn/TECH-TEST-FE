import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/Employees/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Array<Employee> =  [];
  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(x=> {
      this.employees = x;
      console.log(this.employees);
    });
  }

}
