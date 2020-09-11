import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loginUser } from 'src/app/redux/users/login.action';
import { Store } from '@ngrx/store';

@Injectable(
  
)
export class LoginService {

  constructor(private router: Router, private store: Store) { }

  executeLogin(username: string, password: string) {
    this.store.dispatch(loginUser({username, password}))

  }
  
}
