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
}
