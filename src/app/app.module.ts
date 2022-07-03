import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; /* 1 -> import forms module as the ngModal directrive is part of the FormsModule */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule /* 1 -> we need to import that here to make angular aware of the module */,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
