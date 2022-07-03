import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list2',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
})
export class EmployeeListComponent2 implements OnInit {
  public employees: any = [];
  constructor(private _employeeService: EmployeeService) {}
  /* Dependency will be passed as an argument through the constructor parameter */

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
  }
  /* ngOnInit will be called initially when the component is initialized */
}
