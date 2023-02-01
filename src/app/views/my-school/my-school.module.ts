import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySchoolRoutingModule } from './my-school-routing.module';
import { MySchoolComponent } from './my-school.component';


@NgModule({
  declarations: [
    MySchoolComponent
  ],
  imports: [
    CommonModule,
    MySchoolRoutingModule
  ]
})
export class MySchoolModule { }
