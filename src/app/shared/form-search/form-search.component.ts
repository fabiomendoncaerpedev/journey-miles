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
}
