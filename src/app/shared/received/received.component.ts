import { Component } from '@angular/core';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent {
  displayedColumns = ['form', 'detail', 'date',];
  dataSource = ELEMENT_DATA;
  selected = '1';
}

export interface Element {
  form: number;
  detail: string;
  // email: string;
  date: string;
 
}


const ELEMENT_DATA: Element[] = [
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Edward Francis is off today because he has to fo to regional flute championship', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},
  {form: +614325468989 ,detail: 'Jimmy is off today because of cold', date:'16/12/2022 11:32:55'},

  // {name: '<i><img src="../../assets/images/user-8.svg"></i> <span>Leslie Alexander</span>', number: +61480013910, email: 'lesliea@gmail.com', roles:'Staff', status:'Active',  },
];