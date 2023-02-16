import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';
import { ChooseTemplateComponent } from './choose-template/choose-template.component';
import { CreateMsgComponent } from './create-msg/create-msg.component';

const routes: Routes = [
  {path:'', component:MessageComponent},
  {path:'choose-template', component:ChooseTemplateComponent},
  {path:'create-msg', component:CreateMsgComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [
    RouterModule,
  ]
})
export class MessageRoutingModule { }
