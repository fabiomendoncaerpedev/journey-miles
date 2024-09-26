import { Observable } from 'rxjs';
import { SaleService } from './../../core/services/sale.service';
import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/core/types/type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  salesList$!: Observable<Array<Sale>>;

  constructor(
    private saleService: SaleService
  ) { }

  ngOnInit(): void {
    this.salesList$ = this.saleService.list();
  }

}
