import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail2',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.id }} - {{ employee.name }} {{ employee.age }}</li>
    </ul>
  `,
})
export class EmployeeDetailComponent2 implements OnInit {
  public employees: any = [];
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
}
