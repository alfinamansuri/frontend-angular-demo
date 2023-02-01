import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPassowrdComponent } from './forgot-passowrd/forgot-passowrd.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPassowrdComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  exports: [
    SharedModule
  ],
})
export class AuthenticationModule { }
