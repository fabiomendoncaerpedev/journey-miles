import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {

  private formSearch: FormGroup;

  constructor() {
    this.formSearch = new FormGroup({
      oneWayTicket: new FormControl(false),
      origin: new FormControl(),
      destiny: new FormControl()
    })
  }

  getFormSearch(): FormGroup {
    return this.formSearch;
  }

  getControl(controlName: string): FormControl {
    const control = this.formSearch.get(controlName);

    if (!control)
      throw new Error(`FormControl called ${controlName} was not found`);

    return control as FormControl;
  }
}
