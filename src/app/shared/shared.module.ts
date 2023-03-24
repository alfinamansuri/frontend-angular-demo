import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLeftComponent } from './auth-left/auth-left.component';
import { MaterialModuleModule } from './material-module/material-module.module';
import { CreatePassModalComponent } from './modal/create-pass-modal/create-pass-modal.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { SentTabComponent } from './sent-tab/sent-tab.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ReceivedComponent } from './received/received.component';
import { DraftComponent } from './draft/draft.component';
import { TemplateComponent } from './template/template.component';
import { AddAdditionalModalComponent } from './modal/add-additional-modal/add-additional-modal.component';
import { SheduleModalComponent } from './modal/shedule-modal/shedule-modal.component';
import { LogoutModalComponent } from './modal/logout-modal/logout-modal.component';






@NgModule({
  declarations: [
    AuthLeftComponent,
    CreatePassModalComponent,
    SideBarComponent,
    HeaderComponent,
    BarChartComponent,
    SentTabComponent,
    PaginationComponent,
    ReceivedComponent,
    DraftComponent,
    TemplateComponent,
    AddAdditionalModalComponent,
    SheduleModalComponent,
    LogoutModalComponent,
   

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
    BarChartComponent,
    SentTabComponent,
    ReceivedComponent,
    DraftComponent,
    TemplateComponent,
    SheduleModalComponent,
    LogoutModalComponent,
   

    
  ]
})
export class SharedModule { }
