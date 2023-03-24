import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
// import { MatMomentDateModule } from "@angular/material-moment-adapter";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,

 
  ],
  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    MatStepperModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  
  ]
})
export class MaterialModuleModule { }
