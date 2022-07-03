import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  template: `
    <div
      [ngSwitch]="color"
      ${/* Giving the reference value from the class property */ ``}
    >
      <div
        *ngSwitchCase="'red'"
        ${
          /* mentioning the reference value. which wil be referred and rendered based on the switch 
            case refernce class propert(color) */ ``
        }
      >
        You picked red color
      </div>
      <div *ngSwitchCase="'blue'">You picked blue color</div>
      <div *ngSwitchCase="'green'">You picked green color</div>
      <div
        *ngSwitchDefault${
          /* this will be rendered as default when there is no case matches the specified value in 
            the class property */ ``
        }
      >
        Pick again
      </div>
    </div>
    <!-- we can specify some case and based on that case, particular element will be redered -->
  `,
  styleUrls: ['./switch.component.css'],
})
export class SwitchComponent implements OnInit {
  public color = 'red';
  constructor() {}

  ngOnInit(): void {}
}
