import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { signUpUser } from 'src/app/redux/users/login.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit(): void {
  }
  signup(username: string, name: string, surname: string, password:string){
    //let user:User = {"username":usr,"email":mail,"password":pass};
    //console.log(user);
    this.store.dispatch(signUpUser({username, name, surname, password }));
  }

}
