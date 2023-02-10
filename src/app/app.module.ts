import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { FormsModule } from '@angular/forms';






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
    FormsModule
  
  ],

  bootstrap: [AppComponent],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: {disabled: true}}
  ],



  exports:[
    // MatIconModule,
  ],


 
})
export class AppModule { }
