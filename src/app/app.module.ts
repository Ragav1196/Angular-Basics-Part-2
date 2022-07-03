import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './without service/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './without service/employee-detail/employee-detail.component';
import { EmployeeService } from './with service/services/employee.service';
import { EmployeeListComponent2 } from './with service/employee-list/employee-list.component';
import { EmployeeDetailComponent2 } from './with service/employee-detail/employee-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeListComponent2,
    EmployeeDetailComponent,
    EmployeeDetailComponent2,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent] /* 1 ->(1) register the service */,
})
export class AppModule {}
