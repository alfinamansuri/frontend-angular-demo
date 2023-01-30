import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLeftComponent } from './auth-left/auth-left.component';
import { MaterialModuleModule } from './material-module/material-module.module';


@NgModule({
  declarations: [
    AuthLeftComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule
  ],
  exports: [
    AuthLeftComponent,
    MaterialModuleModule
  ]
})
export class SharedModule { }
