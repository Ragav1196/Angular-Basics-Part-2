import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
})
export class EmployeeListComponent implements OnInit {
  public employees: any = [];
  public errorMsg: any;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployees().subscribe(
      (data) => (this.employees = data),
      (error) => (this.errorMsg = error) /* 10 -> getting the error message */
    ); /* 7 -> subscribe will get the data coming from the response */
  }
}
