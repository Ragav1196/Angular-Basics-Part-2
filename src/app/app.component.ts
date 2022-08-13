import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  // userModel = new User('', 'rob@test.com', 5465465, '', 'morning', true);

  // 8
  userModel = new User('', 'rob@test.com', 5465465, 'default', 'morning', true);

  // 10
  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }
}
