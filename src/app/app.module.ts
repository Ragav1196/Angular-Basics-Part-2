import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, EmployeeDetailComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule /* 1 -> No need to import HttpService into providers, it will automatically done by 
      the HttpClientModule */,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
/* 
OBSERVABLE:
  It is a response that we got for a api call 
*/
