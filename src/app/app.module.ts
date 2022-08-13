import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DeparmentContactsComponent } from './deparment-contacts/deparment-contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DepartmentDetailsComponent,
    DepartmentOverviewComponent,
    DeparmentContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
/* 1 ->(1) Child Routes  */
