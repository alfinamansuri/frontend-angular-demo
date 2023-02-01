import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authentication' , loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule ) },
  { path: 'my-school' , loadChildren: () => import('./views/my-school/my-school.module').then(m => m.MySchoolModule ) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
