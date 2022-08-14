import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  registrationForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl(),
    }),
  });

  loadApiDataCompletly() {
    this.registrationForm.setValue({
      username: 'Ragav',
      password: 'Ragav',
      confirmPassword: 'Ragav',
      address: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        postalCode: 635851,
      },
    });
  }

  loadApiDataPartially() {
    this.registrationForm.patchValue({
      username: 'Ragav',
      password: 'Ragav',
      confirmPassword: 'Ragav',
    });
  }
}
