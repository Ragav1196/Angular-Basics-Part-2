import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './shared/password.validator';
import {
  customeForbiddenNameValidator,
  forbiddenNameValidator,
} from './shared/user-name.valdator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  get userName() {
    return this.registrationForm.get('username');
  }

  registrationForm = this.fb.group(
    {
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          forbiddenNameValidator,
          customeForbiddenNameValidator(/password/),
        ],
      ],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
    },
    { validators: passwordValidator }
    /* 
    as we are going to keep h old of two values(password and confirm password) we are passing 
      the validator function directly to the form instead of passing to the individual field
    */
  );
}
