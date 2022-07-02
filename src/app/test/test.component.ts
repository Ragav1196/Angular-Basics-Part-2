import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  /*
   1 -> INTERPOLATION   
      here we are binding the data from class to the template
  */
  template: `
    <!-- WHAT CAN BE DONE USING INTERPOLATION -->
    <h2>Welcome {{ name }}</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>

    <!-- WHAT CANNOT BE DONE USING INTERPOLATION -->
    <!-- Assignments cannot be made -->
    <!-- <h2>{{a = 2+2}}</h2> -->

    <!-- we cannot access global variables like window. Instead we can assign a variable for the 
            global variable and then we can interpolate that in here -->
    <h2>{{ siteUrl }}</h2>
  `,

  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  /* 1 -> INTERPOLATION */
  public name = 'Ragav';
  public siteUrl = window.location.href;

  constructor() {}

  ngOnInit(): void {}

  greetUser() {
    return 'Hello ' + this.name;
  }
}
