import { Component, EventEmitter, Output } from '@angular/core';
import { FormSearchService } from './../../../core/services/form-search.service';
import { SearchData } from 'src/app/core/types/types';

@Component({
  selector: 'app-complementary-filters',
  templateUrl: './complementary-filters.component.html',
  styleUrls: ['./complementary-filters.component.scss']
})
export class ComplementaryFiltersComponent {
  @Output('do-search') doSearch: EventEmitter<SearchData> = new EventEmitter();

  constructor(
    public formSearchService: FormSearchService
  ) {}

  find() {
    if(!this.formSearchService.formIsValid()) {
      this.formSearchService.getFormSearch().markAllAsTouched();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      return;
    }

    this.doSearch.emit(this.formSearchService.getSearchData());
  }
}
