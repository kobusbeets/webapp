import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UtilsService } from '../../shared/utils.service';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-detailview',
  templateUrl: './ticket-detailview.component.html',
  styleUrls: ['./ticket-detailview.component.css']
})
export class TicketDetailviewComponent implements OnInit {

  date_created_formatted: string = '';

  constructor(private activatedRoute: ActivatedRoute, private us: UtilsService, private ts: TicketService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.ts.getTicket(+params['id']).then((response) => {
          
          this.date_created_formatted = this.us.formatDate(response.date_created);

        });
      }
    );
  }

}
