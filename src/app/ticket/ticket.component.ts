import { Component, OnInit, OnDestroy } from '@angular/core';

import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  providers: [TicketService]
})
export class TicketComponent implements OnInit, OnDestroy {

  constructor(private ts: TicketService) { }

  ngOnInit() {
    this.ts.onInit();
  }

  ngOnDestroy() {
    this.ts.onDestroy();
  }
}
