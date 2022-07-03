import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { SwitchComponent } from './switch/switch.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [AppComponent, NgIfComponent, SwitchComponent, NgForComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
