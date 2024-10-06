import { Component, OnInit } from '@angular/core';
import { SearchData, Ticket } from 'src/app/core/types/types';
import { FormSearchService } from './../../core/services/form-search.service';
import { TicketsService } from './../../core/services/tickets.service';

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
    const defaultSearch = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteId: false,
      passageirosAdultos: 1,
      tipo: 'Executiva'
    };

    const search = this.formSearchService.formIsValid()
      ? this.formSearchService.getSearchData()
      : defaultSearch;

    this.ticketsService.getTickets(search).subscribe({
      next: (response) => {
        this.tickets = response.resultado;
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
