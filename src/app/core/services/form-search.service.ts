import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormSearchService {

  formSearch: FormGroup;

  constructor() {
    this.formSearch = new FormGroup({
      oneWayTicket: new FormControl(false)
    })
  }
}
