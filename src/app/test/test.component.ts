import { Component, OnInit } from '@angular/core';

@Component({
  /*
    1 -> EVENT BINDING 
      Here the binding happens from template to the class(like when user click changes happens).  
  */
  selector: 'app-test',
  template: `<h2>Welcome {{ name }}</h2>
    <button (click)="onClick()">Greet</button>
    <!-- Adding a onClick event -->

    {{ greeting }}
    <!-- changing content on user click -->

    <button (click)="onClick2($event)">Greet</button>
    <!-- Passing DOM event as parameter to the onClick method -->

    <button (click)="nothing = 'nothing'">Greet</button>
    <!-- Defining the function definition in line itself -->
    {{ nothing }}`,
  styles: [],
})
export class TestComponent implements OnInit {
  public name = 'RAGAV';
  public greeting = '';
  public nothing = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('Hello World');
    this.greeting = 'Hello World';
  }

  onClick2(event: any) {
    console.log(event);
  }
}
