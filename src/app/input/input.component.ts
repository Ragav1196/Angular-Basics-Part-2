import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <!-- <h2>Hello {{ parentData }}</h2> -->
    <!-- 1 ->(4) -->
    <!-- --------------------------------------------------------------------------------------- -->

    <h2>Hello {{ name }}</h2>
  `,
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  /* @Input()
  // This decarator is used to tell angular that this value is comping from parent
  //   component
  public parentData: any;
  // 1 ->(3) declaring the reference through which the name property is sent from parent
  //   component */
  /* --------------------------------------------------------------------------------------------- */

  /* CHANGING THE NAME OF THE VARIBALE THAT IS PASSED FROM THE PARENT COMPONENT */
  @Input('parentData')
  /* This decarator is used to tell angular that this value is comping from parent 
      component */
  public name: any;
  /* 1 ->(3) declaring the reference through which the name property is sent from parent 
      component */
  constructor() {}

  ngOnInit(): void {}
}
