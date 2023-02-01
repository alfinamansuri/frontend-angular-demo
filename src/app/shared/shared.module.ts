import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLeftComponent } from './auth-left/auth-left.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CreatePassModalComponent } from './modal/create-pass-modal/create-pass-modal.component';



@NgModule({
  declarations: [
    AuthLeftComponent,
    CreatePassModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,

 
    
  ],
  exports: [
    AuthLeftComponent,
    MaterialModuleModule,
    CreatePassModalComponent

  ]
})
export class SharedModule { }
