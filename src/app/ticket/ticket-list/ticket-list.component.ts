import { Component, OnInit } from '@angular/core';

import { TicketService } from '../ticket.service';

import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {

  tickets: Ticket[];

  constructor(private ts: TicketService) { }

  ngOnInit() {
    this.tickets = this.ts.tickets;
  }

}
