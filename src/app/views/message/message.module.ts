import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message.component';
import { MessageRoutingModule } from './message-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { CreateMsgComponent } from './create-msg/create-msg.component';



@NgModule({
  declarations: [
    MessageComponent,
    ChooseTemplateComponent,
    CreateMsgComponent,
  ],
  imports: [
    CommonModule,
    MessageRoutingModule,
    SharedModule,
    RouterModule
    

  ],
})
export class MessageModule { }
