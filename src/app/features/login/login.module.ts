import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './main/login.component';
import { LoginService } from './services/login.service';




@NgModule({
  declarations: [LoginComponent],
  providers: [LoginService],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
