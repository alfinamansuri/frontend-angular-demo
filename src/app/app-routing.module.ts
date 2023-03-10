import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authentication' , loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule ) },
  { path: 'my-school' , loadChildren: () => import('./views/my-school/my-school.module').then(m => m.MySchoolModule ) },
  { path: 'dashboard' , loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule ) },
  { path: 'message' , loadChildren: () => import('./views/message/message.module').then(m => m.MessageModule ) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
