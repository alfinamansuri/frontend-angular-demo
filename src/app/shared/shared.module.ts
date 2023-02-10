import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLeftComponent } from './auth-left/auth-left.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CreatePassModalComponent } from './modal/create-pass-modal/create-pass-modal.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';





@NgModule({
  declarations: [
    AuthLeftComponent,
    CreatePassModalComponent,
    SideBarComponent,
    HeaderComponent,
    BarChartComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModuleModule,
 
    
    
  ],
  exports: [
    CreatePassModalComponent,
    SideBarComponent,
    HeaderComponent,
    AuthLeftComponent,
    MaterialModuleModule,
    BarChartComponent

    
  ]
})
export class SharedModule { }
