import { Component } from '@angular/core';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent {
  minPrice?: number = 0;
  maxPrice?: number = 5000
}
