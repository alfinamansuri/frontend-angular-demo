import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatRippleModule } from '@angular/material';
// import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    // MAT_RIPPLE_GLOBAL_OPTIONS,
    
  ],

  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}}
  ],



  exports:[
    SharedModule,
    // MatRippleModule,
    // MAT_RIPPLE_GLOBAL_OPTIONS,
  
  ],


 
})
export class AppModule { }
