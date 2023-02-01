import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForgotPassowrdComponent } from './forgot-passowrd/forgot-passowrd.component';
import { CreatePassowrdComponent } from './create-passowrd/create-passowrd.component';



@NgModule({
  declarations: [
    LoginComponent,
    ForgotPassowrdComponent,
    CreatePassowrdComponent
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
