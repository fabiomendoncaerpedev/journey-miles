import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/core/types/types';
import { TicketsService } from './../../core/services/tickets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  tickets: Array<Ticket> = [];

  constructor(
    private ticketsService: TicketsService
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

    this.ticketsService.getTickets(defaultSearch).subscribe({
      next: (response) => {
        this.tickets = response.resultado;
      }
    })
  }
}
