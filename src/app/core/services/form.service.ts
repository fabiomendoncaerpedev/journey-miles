import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private form: FormGroup | null = null;

  constructor() { }

  getForm(): FormGroup | null {
    return this.form;
  }

  setForm(form: FormGroup) {
    this.form = form;
  }
}
