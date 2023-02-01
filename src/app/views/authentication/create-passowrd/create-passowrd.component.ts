import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CreatePassModalComponent } from 'src/app/shared/modal/create-pass-modal/create-pass-modal.component';


@Component({
  selector: 'app-create-passowrd',
  templateUrl: './create-passowrd.component.html',
  styleUrls: ['./create-passowrd.component.scss']
})
export class CreatePassowrdComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(CreatePassModalComponent);
  }

}




