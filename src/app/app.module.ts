import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* 
1 -> Two types of approach for forms 
  1 - Template Driven forms - Heavy on component template
  2 - Reactive forms - heavy on component class

    Template Driven forms:
    
      1 -> Introduction
        We use two way data binding with NgModule.
        Readabilty of the form increases with complex forms
        Suitable for simple forms
*/
