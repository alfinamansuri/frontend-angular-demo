import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySchoolRoutingModule } from './my-school-routing.module';
import { MySchoolComponent } from './my-school.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MySchoolComponent,
   
  ],
  imports: [
    CommonModule,
    MySchoolRoutingModule,
    SharedModule
    
  ],
  exports: [
    MySchoolComponent,
  ],
})
export class MySchoolModule { }
