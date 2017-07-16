import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-detailview',
  templateUrl: './ticket-detailview.component.html',
  styleUrls: ['./ticket-detailview.component.css']
})
export class TicketDetailviewComponent implements OnInit {

  date_created_formatted: string = '';

  constructor(private activatedRoute: ActivatedRoute, private ts: TicketService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.ts.getTicket(+params['id']).then((response) => {
          
          let date = new Date(response.date_created * 1000);
          
          let months = [
            "January", "February", "March", "April", "May", "June", "July", "August", "September",
            "October", "November", "December"
          ];

          this.date_created_formatted = months[date.getMonth()] + " " + date.getDate() +
          ", " + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() +
          ":" + date.getSeconds();

        });
      }
    );
  }

}
