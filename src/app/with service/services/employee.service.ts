import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
/* 
@Injectable is needed when Dependency needed to be injected into the constructor. this 
  @Injectable can only be found in the service file but not in the employeelist or employeeDetails 
  file. this is because the @Component decarator itself enough for the angular to understand that 
  it may inject dependecy if needed
*/
export class EmployeeService {
  constructor() {}

  getEmployees() {
    return [
      { id: 1, name: 'Andrew', age: 30 },
      { id: 1, name: 'Brandon', age: 25 },
      { id: 1, name: 'Christina', age: 26 },
      { id: 1, name: 'Elena', age: 28 },
    ];
  }
  /* 1 ->(1) creating a method that return a employee list */
}
