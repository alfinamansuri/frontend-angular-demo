import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LogoutModalComponent } from '../modal/logout-modal/logout-modal.component';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  showFiller = false;
  constructor(public dialog: MatDialog) {}
  openDialog_logout() {
    const dialogRef = this.dialog.open(LogoutModalComponent);
  }
}
