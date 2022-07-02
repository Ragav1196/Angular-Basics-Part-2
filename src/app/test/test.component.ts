import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{ name }}</h2>
    <!-- 1 -> CLASS BINDING -->
    <h2 class="text-success">RAGAV</h2>
    <!-- Class applied using attribute -->

    <h2 [class]="successClass">RAGAV</h2>
    <!-- Class applied using class binding method -->

    <h2 class="text-special" [class]="successClass">RAGAV</h2>
    <!-- using both class attribute and class binding -->

    <h2
      [class.text-danger]${
        /* Mentioning the class which we want to apply conditionally */ ''
      }="hasError"
    >
      RAGAV
    </h2>
    <!-- applying class binding conditionally -->

    <!-- 
    2 -> WHAT IF WE WANT TO APPLY MULTIPLE CLASS CONDITIONALY:
        Then we can use ngClass directive. a directive is nothing but a angular custom attribute
     -->
    <h2 [ngClass]="messageClasses">RAGAV</h2>`,
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  public name = 'RAGAV';
  public successClass = 'text-success';
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial,
  };
  constructor() {}

  ngOnInit(): void {}
}
