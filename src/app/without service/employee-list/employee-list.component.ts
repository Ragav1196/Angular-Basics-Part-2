import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
})
export class EmployeeListComponent implements OnInit {
  public employees = [
    { id: 1, name: 'Andrew', age: 30 },
    { id: 1, name: 'Brandon', age: 25 },
    { id: 1, name: 'Christina', age: 26 },
    { id: 1, name: 'Elena', age: 28 },
  ];
  /* 
  This data above has to be in a common place. we should not repeat the code. inorder to do that 
    we can create a service and we can have this data in thier and share with all components.

  Using this service we can also implement logics and keep them in a common place

  also external interaction like connecting to some database should also be in service. to make 
    it available for other components
  */
  constructor() {}

  ngOnInit(): void {}
}
