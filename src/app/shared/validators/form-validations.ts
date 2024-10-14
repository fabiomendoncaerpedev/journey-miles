import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidations {
  static equalTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;
      const otherFieldValue = control.root.get(otherField)?.value;

      return fieldValue != otherFieldValue
        ? { equalTo: true }
        : null;
    };
  }

  static required(isPerfilComponent: boolean): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const fieldValue = control.value;

      return !isPerfilComponent && !fieldValue
        ? { required: true }
        : null;
    };
  }
}
