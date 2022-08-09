import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationHelper } from '../helpers/validationHelper';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  isLoading: boolean = false;

  constructor(private fb: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private _nzNotificatonService: NzNotificationService) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required,
        Validators.pattern(ValidationHelper.RegularExpressions.Email)]),
      password: new FormControl('', Validators.required)
      // remember: new FormControl(false )
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      if (this.authenticationService.login(this.loginForm.getRawValue())) {
        this.isLoading = false;
        this.router.navigate(['employees']);
      } else {
        this.isLoading = false;
        this._nzNotificatonService.create('error', 'Error', 'Authentication Failed');
      }
    } else {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
    // console.log(this.authenticationService.login('joe', 'mypassword'));
    // console.log('login clicked...');
  }
}
