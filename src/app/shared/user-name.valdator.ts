import { AbstractControl, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(
  control: AbstractControl
): { [key: string]: any } | null {
  const forbidden = /admin/.test(control.value);
  /* 
  it tests if the input field containd value equal to admin or not.
    if it includes then it returns true or else return false           
  */
  return forbidden ? { forbiddenName: { value: control.value } } : null;
}

/* 
{ [key: string]: any } | null 
    it means that the function return either a object with key of type string and value of type 
        any or return only null
*/

// To provide parameter to the validator function we are creating a custom function as the
// inbuild one above doesnt accepts any custom parameter
export function customeForbiddenNameValidator(
  forbiddenName: RegExp
): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenName.test(control.value);
    return forbidden ? { customForbiddenName: { value: control.value } } : null;
  };
}
