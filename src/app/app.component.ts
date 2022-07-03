import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Lesson';
  public name =
    'Ragav'; /* 1 ->(1) we going to pass this variable to the input component */
  public message = '';
}
