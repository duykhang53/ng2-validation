import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { CountryCode, isValidNumber } from 'libphonenumber-js';

import { isPresent } from '../util/lang';

export const phone = (country: CountryCode): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    if (isPresent(Validators.required(control))) return null;

    let v: string = control.value;

    return isValidNumber({ phone: v, country }) ? null : { phone: true };
  };
};
