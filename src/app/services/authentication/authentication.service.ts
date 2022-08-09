import { Injectable } from '@angular/core';
import { LoginCredentials } from '../../models/auth-model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  static localStorageKey = 'Auth';
  users: { [username: string]: string } = {};

  constructor() {
    this.users['joe.abounakoul@hotmail.com'] = '1234';
  }


  login(loginCredentials : LoginCredentials): boolean {
    if (this.users[loginCredentials.email] != null) {
      localStorage.setItem(AuthenticationService.localStorageKey, loginCredentials.email);
      return true;
    }
    return false;
  }

  logout(): void {
      localStorage.removeItem(AuthenticationService.localStorageKey);
  }

  signUp(loginCredentials : LoginCredentials): boolean {
    if (this.users[loginCredentials.email] == null) {
      this.users[loginCredentials.email] = loginCredentials.password;
      return true;
    }
    return false;
  }

}
