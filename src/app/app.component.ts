import { Component } from '@angular/core';

@Component({
  selector:
    'app-root' /* 1 -> This act as custom html tag. when specified in other html page it renders the app.component.html of this particular component */,
  templateUrl:
    './app.component.html' /* 2 ->  here we can specify the html page which should be rendered when "app-root" selector is used */,
  styleUrls: [
    './app.component.css',
  ] /* 3 -> style that can be applied only to this component */,
}) 
export class AppComponent {
  title = 'Application';
}
