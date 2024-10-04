import { Component, EventEmitter, Output } from '@angular/core';
import { FormSearchService } from './../../core/services/form-search.service';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent {
  @Output('do-search') doSearch: EventEmitter<any> = new EventEmitter();

  constructor(
    public formSearchService: FormSearchService,
  ) {}

  find() {
    const formSearchValue = this.formSearchService.getFormSearch().value;

    this.doSearch.emit(formSearchValue);
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
