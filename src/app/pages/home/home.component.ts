import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleService } from './../../core/services/sale.service';
import { Sale, Testimony } from 'src/app/core/types/types';
import { TestimonyService } from './../../core/services/testimony.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  salesList$?: Observable<Array<Sale>>;
  testimonyList$?: Observable<Array<Testimony>>;

  constructor(
    private saleService: SaleService,
    private testimonyService: TestimonyService
  ) { }

  ngOnInit(): void {
    this.salesList$ = this.saleService.list();
    this.testimonyList$ = this.testimonyService.list();
  }

}
