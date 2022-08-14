import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* Refer Notion  */

/* 
  1 -> 
  Most of the code resides in the component class. also ther is no two way bindining. Easy to 
    add dynamic fields(like we can add another phone number field based on user preference).\

  Custom validation is easy. 

  dynamic validation based on user Preference.

  unit test is easy.

  reactive forms require more coding compare to template driven forms
*/
