import { Component } from '@angular/core';
import { FormSearchService } from './../../core/services/form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  constructor(
    public formSearchService: FormSearchService,
  ) {}

  find() {
    console.log('valores do FORM - value', this.formSearchService.getFormSearch().getRawValue());
  }

  switchOriginDestiny() {
    const origin = this.formSearchService.getControl('origin').value;
    const destiny = this.formSearchService.getControl('destiny').value;

    this.formSearchService.getFormSearch().patchValue({
      origin: destiny,
      destiny: origin
    })
  }
}
