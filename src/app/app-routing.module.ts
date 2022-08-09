import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'employees/:id',
    component: EmployeeDetailsComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
