import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/core/types/types';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {
  @Input() ticket!: Ticket;

  get textoIdaVolta(){
    return !this.ticket.dataVolta
      ? "Somente ida"
      : "Ida e volta";
  }
}
