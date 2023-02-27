import { Component } from '@angular/core';

@Component({
  selector: 'app-add-additional-modal',
  templateUrl: './add-additional-modal.component.html',
  styleUrls: ['./add-additional-modal.component.scss']
})
export class AddAdditionalModalComponent {
  displayedColumns = ['action', 'role','email','no'];
  dataSource = ELEMENT_DATA;
  selected = '1';
}


export interface Element {
  action: string;
  role: string;
  // email: string;
  email: string;
  no: number; 
}

const ELEMENT_DATA: Element[] = [
  {action: 'Jerome Bell',role: 'Caregiver', email:'jeromebell21@gmail.com', no:+61092156867},
  {action: 'Kathryn Murphy',role: 'Student', email:'kmurphy@gmail.com', no:+61092156867},
  {action: 'Kristin Watson',role: 'Caregiver',email :'kristinw@gmail.com', no:+61092156867},
  {action: 'Jenny Wilson',role: 'Caregiver',email :'jennnyw@gmail.com', no:+61092156867},
  {action: 'Arlene McCoy',role: 'Caregiver',email :'arlencem@gmail.com', no:+61092156867},
  {action: 'Jnnette Black',role: 'Student', email:'annetteb@gmail.com', no:+61092156867},
  {action: 'Leslie Alexander',role: 'Staff',email :'lesliea@gmail.com', no:+61092156867},

  // {name: '<i><img src="../../assets/images/user-8.svg"></i> <span>Leslie Alexander</span>', number: +61480013910, email: 'lesliea@gmail.com', roles:'Staff', status:'Active',  },
];