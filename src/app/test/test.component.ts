import { Component, OnInit } from '@angular/core';

@Component({
  /* Pipes are used to transform data before displaying in the view. pipe will only transform the 
    data in the view. it will not change the value in the class  */
  selector: 'app-test',
  template: `
    <!-- STRINGS -->
    <h2>{{ name }}</h2>
    <h2>
      {{ name | lowercase
      }}<!-- Pipe is defined like this, followed by "|" -->
    </h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ message | titlecase }}</h2>
    <h2>
      {{ name | slice ${/* slice the string according to our need */ ``}: 1 ${
        /* ending place */ ``
      }:4 ${/* starting place */ ``} }}
    </h2>
    <h2>{{ person | json }}</h2>

    <!-- NUMBERS -->
    <!--  <h2>
      {{5.678 | number :'3${/* minimum number of integer place */ ``}.2${
      /* minimum number of decimal place */ ``
    }-3${/* maximum number of decimal place */ ``}'}}
    </h2> -->
    <h2>{{ 5.678 | number: '3.4-5' }}</h2>
    <h2>{{ 5.678 | number: '3.1-2' }}</h2>
    <h2>{{ 0.25 | percent }}</h2>
    <h2>{{ 0.25 | currency }}</h2>
    <h2>{{ 0.25 | currency: 'GBP' }}</h2>
    <h2>{{ 0.25 | currency: 'INR' }}</h2>
    <h2>{{ 0.25 | currency: 'INR':'code' }}</h2>

    <!-- DATES -->
    <h2>{{ date }}</h2>
    <h2>{{ date | date: 'short' }}</h2>
    <h2>{{ date | date: 'shortDate' }}</h2>
    <h2>{{ date | date: 'shortTime' }}</h2>
  `,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'Ragav';
  public message = 'Welcome RAGAV';
  public person = {
    firstName: 'John',
    lastName: 'Doe',
  };
  public date = new Date();

  constructor() {}

  ngOnInit(): void {}
}
