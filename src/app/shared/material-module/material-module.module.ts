import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
 
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule
  
  ]
})
export class MaterialModuleModule { }
