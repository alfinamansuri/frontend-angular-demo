import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPassowrdComponent } from './forgot-passowrd/forgot-passowrd.component';
import { CreatePassowrdComponent } from './create-passowrd/create-passowrd.component';



const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forgot_password', component:ForgotPassowrdComponent},
  {path:'create_password', component:CreatePassowrdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
