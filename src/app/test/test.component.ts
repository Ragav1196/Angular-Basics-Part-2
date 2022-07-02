import { Component, OnInit } from '@angular/core';

@Component({
  /* 
  1 -> STYLE BINDING:
    Style binding is used to apply inlint style to the html element
  */
  selector: 'app-test',
  template: `<h2>Welcome {{ name }}</h2>
    <h2 [style.color]="'orange'">STYLE BINDING</h2>
    <!-- Binding orange color to the color property -->

    <h2 [style.color]="hasError ? 'red' : 'orange'">STYLE BINDING</h2>
    <!-- Binding orange or red color to the color property conditionally -->

    <h2 [style.color]="highLightColor">STYLE BINDING</h2>
    <!-- Binding green color to the color property using class property -->

    <h2 [ngStyle]="titleStyles">STYLE BINDING</h2>
    <!-- Binding multiple inline style using ngStyle directive -->`,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'RAGAV';
  public hasError = true;
  public highLightColor = 'green';
  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic',
  };
  constructor() {}

  ngOnInit(): void {}
}
