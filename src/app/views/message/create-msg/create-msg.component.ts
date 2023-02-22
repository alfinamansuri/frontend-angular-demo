import { Component } from '@angular/core';

@Component({
  selector: 'app-create-msg',
  templateUrl: './create-msg.component.html',
  styleUrls: ['./create-msg.component.scss']
})
export class CreateMsgComponent {

  isLinear = true;
  displayedColumns = ['name','date','ndate','no','hide',];
  dataSource = ELEMENT_DATA;

}

export interface Element {
  name: string;
  date: string;
  ndate:string;
  no: number; 
}

const ELEMENT_DATA: Element[] = [
  {name: 'Caregivers', date:'16/12/2022 11:32:55', ndate:'16/12/2022 11:32:55', no:12},
  {name: 'Staff', date:'16/12/2022 11:32:55', ndate:'16/12/2022 11:32:55', no:12},
  {name: 'All student', date:'16/12/2022 11:32:55', ndate:'16/12/2022 11:32:55', no:12},
  {name: 'P&C', date:'16/12/2022 11:32:55', ndate:'16/12/2022 11:32:55', no:12},
  {name: 'Year 1', date:'16/12/2022 11:32:55', ndate:'16/12/2022 11:32:55', no:12},
  {name: 'Admin', date:'16/12/2022 11:32:55', ndate:'16/12/2022 11:32:55', no:12},

  // {name: '<i><img src="../../assets/images/user-8.svg"></i> <span>Leslie Alexander</span>', number: +61480013910, email: 'lesliea@gmail.com', roles:'Staff', status:'Active',  },
];
