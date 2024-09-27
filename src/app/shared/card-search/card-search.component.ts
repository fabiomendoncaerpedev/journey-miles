import { Component, Input } from '@angular/core';
import { Sale } from 'src/app/core/types/sale';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {
  @Input('sale-info') saleInfo!: Sale;
}
