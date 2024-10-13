import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { SearchData, Ticket } from 'src/app/core/types/types';
import { TicketsService } from 'src/app/home/services/tickets.service';
import { FormSearchService } from '../core/services/form-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  tickets: Array<Ticket> = [];

  constructor(
    private ticketsService: TicketsService,
    private formSearchService: FormSearchService
  ) {}

  ngOnInit(): void {
    const defaultSearch: SearchData = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: 'Executiva'
    };

    const search = this.formSearchService.formIsValid()
      ? this.formSearchService.getSearchData()
      : defaultSearch;

    this.ticketsService.getTickets(search)
    .pipe(take(1))
    .subscribe({
      next: (response) => {
        this.tickets = response.resultado;
        this.formSearchService.getFormSearch().patchValue({
          minPrice: response.precoMin,
          maxPrice: response.precoMax
        })
      }
    })
  }

  find(event: SearchData) {
    this.ticketsService.getTickets(event).subscribe({
      next: (response) => {
        this.tickets = response.resultado;
      }
    })
  }
}
