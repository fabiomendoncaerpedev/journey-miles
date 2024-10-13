import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale, Testimony } from 'src/app/core/types/types';
import { TestimonyService } from './services/testimony.service';
import { SaleService } from '../search/services/sale.service';

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
    private testimonyService: TestimonyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salesList$ = this.saleService.list();
    this.testimonyList$ = this.testimonyService.list();
  }


  navigateToSearch(event: any) {
    this.router.navigate(['/search'])
  }
}
