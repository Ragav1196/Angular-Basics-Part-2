import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  /* Inorder to send data from child component to parent component we cannot do it as simple as 
    using input */
  selector: 'app-output',
  template: `
    <button (click)="fireEvent()">Send Event</button>
    <!-- 1 ->(2) calling a function on click which will emit the created event along with a data -->
  `,
  styleUrls: ['./output.component.css'],
})
export class OutputComponent implements OnInit {
  @Output() public childEvent =
    new EventEmitter(); /* 1 ->(1) creating an instance of EventEmitter */
  constructor() {}

  ngOnInit(): void {}

  fireEvent() {
    this.childEvent.emit('Hey Ragav'); /* 1 ->(3) emitting the event */
  }
}
