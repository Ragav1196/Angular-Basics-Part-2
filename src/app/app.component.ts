import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue'];
  topicHasError = true;

  userModel = new User(
    'rob',
    'rob@test.com',
    5465463456,
    'default',
    'morning',
    true
  );

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(userForm: NgForm) {
    // 3 ->
    // to get access of all the methods of the form,
    console.log(userForm);

    // userModel value is console logged
    console.log(this.userModel);
  }
}
