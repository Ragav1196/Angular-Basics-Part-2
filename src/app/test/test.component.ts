import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{ name }}</h2>
    <!-- TEMPLATE REFERENCE VARIABLE -->
    <input
      #myInput
      ${
        /* We are providing a reference. so that we can use this reference in events like on click and access this element property */ ``
      }
      type="text"
    />
    <button (click)="logMessage(myInput)">Log 1</button>
    <!-- Accessing the element using the reference -->

    <button (click)="logMessage(myInput.value)">Log 2</button>
    <!-- using onClick event we are accessing the input element property -->`,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'RAGAV';

  constructor() {}

  ngOnInit(): void {}

  logMessage(value: any) {
    console.log(value);
  }
}
