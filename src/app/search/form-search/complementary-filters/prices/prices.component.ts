import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { FormSearchService } from './../../../../core/services/form-search.service';
import { TicketsService } from 'src/app/home/services/tickets.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  minPrice: FormControl<number>;
  maxPrice: FormControl<number>;

  constructor(
    public ticketsService: TicketsService,
    private formSearchService: FormSearchService
  ) {
    this.minPrice = this.formSearchService.getControl<number>('minPrice');
    this.maxPrice = this.formSearchService.getControl<number>('maxPrice');
  }
}
