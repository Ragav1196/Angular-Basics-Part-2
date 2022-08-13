import { Component, OnInit } from '@angular/core';

@Component({
  /* 
    6 -> TYPES OF SELECTOR 
      1 -> CUSTOM TAG
      2 -> USING CLASS
      3 -> SQUARE BRACKETS
  */

  // selector: 'app-test',/* Custom tag */
  // selector: '.app-test' /* Using class */,
  selector: '[app-test]' /* Using square bracket */,

  // templateUrl: './test.component.html',
  /* 7 -> WRITING HTML IN TS FILE ITSELF */
  template: '<div>Inline Tempalte</div>',

  // styleUrls: ['./test.component.css'],
  /* 8 -> WRITING CSS IN TS FILE ITSELF */
  styles: [
    `
      div {
        color: red;
      }
    `,
  ],
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
