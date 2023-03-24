import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-shedule-modal',
  templateUrl: './shedule-modal.component.html',
  styleUrls: ['./shedule-modal.component.scss']
})
export class SheduleModalComponent {


  // myFilter = (d: Date): boolean => {
  //   console.log(d);
  //   // Using a JS Object as a lookup table of valid dates
  //   // Undefined will be falsy.
  //   return this.validDates[d.toISOString()];
  // }

  

  constructor(public dialogRef: MatDialogRef<SheduleModalComponent>) {}  
  closeDialog(): void {
    this.dialogRef.close();
  }


}
