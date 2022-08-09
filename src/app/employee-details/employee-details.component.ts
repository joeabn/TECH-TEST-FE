import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/Employees/employees.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private employeeService: EmployeesService, private router: Router,
              private _nzNotificatonService: NzNotificationService) {
  }

  loading = true;
  employee!: Employee;

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params =>
      this.getEmployee(params['id'])
    );
  }


  getEmployee(id: number) {
    this.employeeService.getEmployeeById(id).subscribe(fetchedEmployee => {
        console.log(fetchedEmployee);
        this.loading = false;
        if (fetchedEmployee == null) {
          this._nzNotificatonService.create('error', 'Error', 'Failed To Fetch Employee');
          this.router.navigateByUrl('employees');
        }
        this.employee = fetchedEmployee;
      }, error => {
        this.loading = false;

        this._nzNotificatonService.create('error', 'Error', 'Failed To Fetch Employee');
        this.router.navigateByUrl('employees');
      }
    );
  }


  update() {
    console.log('update clicked...');
  }
}
