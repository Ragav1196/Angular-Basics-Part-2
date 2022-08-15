import { AbstractControl } from '@angular/forms';

export function passwordValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const password: any = control.get('password');
  const confirmPassword: any = control.get('confirmPassword');
  if (password?.pristine || confirmPassword?.pristine) {
    return null;
  }

  return password.value &&
    confirmPassword.value &&
    password.value !== confirmPassword.value
    ? { misMatch: true }
    : null;
}
