import { Component } from '@angular/core';

@Component({
  selector: 'app-sent-tab',
  templateUrl: './sent-tab.component.html',
  styleUrls: ['./sent-tab.component.scss']
})
export class SentTabComponent {
  displayedColumns = ['name', 'detail','actions', 'date','ndate','no','hide',];
  dataSource = ELEMENT_DATA;
  selected = '1';
}

export interface Element {
  name: string;
  detail: string;
  // email: string;
  date: string;
  ndate:string;
  no: number; 
}

const ELEMENT_DATA: Element[] = [
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},
  {name: 'Soccer Training Cancelled',detail: 'Hi team, soccer training is cancelled for today.', date:'16/12/2022 11:32:55', ndate:'76/12/2022 10:15:32', no:17},

  // {name: '<i><img src="../../assets/images/user-8.svg"></i> <span>Leslie Alexander</span>', number: +61480013910, email: 'lesliea@gmail.com', roles:'Staff', status:'Active',  },
];