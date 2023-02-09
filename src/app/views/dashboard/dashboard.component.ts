import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})




export class DashboardComponent {
  displayedColumns = ['name', 'number', 'email' , 'roles', 'status','login','actions',];
  dataSource = ELEMENT_DATA;
  foods: Food[] = [
    {value: 'This Week', viewValue: 'This Week'},
    {value: 'Last Week', viewValue: 'Last Week'},
    {value: 'Last Month', viewValue: 'Last Month'}
  ];
}




export interface Food {
  value: string;
  viewValue: string;
}

export interface Element {
  name: string;
  number: number;
  email: string;
  roles: string;
  status: string;
  login: string;  
}

const ELEMENT_DATA: Element[] = [
  {name: '<i><img src="../../assets/images/user-1.svg"></i> <span>Jerome Bell</span>',number: +61092156867, email: 'jeromebell21@gmail.com', roles:'Admin', status:'Active', login:'2 hr ago'},
  {name: '<i><img src="../../assets/images/user-2.svg"></i> <span>Kathryn Murphy</span>', number:+61488805460, email: 'kmurphy@gmail.com', roles:'Staff', status:'Active',  login:'1 hr ago'},
  {name: '<i><img src="../../assets/images/user-1.svg"></i> <span>Kristin Watson</span>', number: +61488827086, email: 'kristinw@gmail.com', roles:'Admin', status:'Active',  login:'2 hr ago'},
  {name: '<i><img src="../../assets/images/user-1.svg"></i> <span>Jenny Wilson</span>', number: +61480025873, email: 'jennnyw@gmail.com', roles:'Staff', status:'inactive',  login:'3 hr ago'},
  {name: '<i><img src="../../assets/images/user-1.svg"></i> <span>Arlene McCoy</span>', number: +61488850430, email: 'arlencem@gmail.com', roles:'Staff', status:'Active',  login:'5 hr ago'},
  {name: '<i><img src="../../assets/images/user-1.svg"></i> <span>Annette Black</span>', number: +61480026121, email: 'annetteb@gmail.com', roles:'Staff', status:'Active',  login:'10 hr ago'},
  {name: '<i><img src="../../assets/images/user-7.svg"></i> <span>Cody Fisher</span>', number: +61480028671, email: 'fcody261@gmail.com', roles:'Staff', status:'inactive',  login:'2 hr ago'},
  {name: '<i><img src="../../assets/images/user-8.svg"></i> <span>Leslie Alexander</span>', number: +61480013910, email: 'lesliea@gmail.com', roles:'Staff', status:'Active',  login:'1 hr ago'},
];




