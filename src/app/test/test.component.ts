import { Component, OnInit } from '@angular/core';

@Component({
  /* 1 -> Here the data will flow from view (template) to the modal(class) and vice versa */
  selector: 'app-test',
  template: `<input [(ngModel)]="name" type="text" />
    {{ name }}
    <!-- What we want is when user input something then that should change this name property in 
    the class and inturn the class property name should also update the value in the view -->`,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = '';

  constructor() {}

  ngOnInit(): void {}
}
