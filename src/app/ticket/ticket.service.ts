import { Injectable } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

import { RemoteService } from '../shared/remote.service';

import { Ticket } from './ticket.model'

@Injectable()
export class TicketService {

  ticket: Ticket = new Ticket();

  tickets: Ticket[] = [];

  ticketsTicker;

  constructor(private rs: RemoteService) { }

  onInit() {
    this.getTickets();
    this.ticketsTicker = setInterval(() => { 
      this.getTickets(); 
    }, 3000); //set for every 30 seconds
  }

  onDestroy() {
    clearInterval(this.ticketsTicker);
  }

  /**
   * The getTickets() returns a list of ticket resources.
   */
  getTickets() {
    this.rs.get('ticket').then(
      (response) => {
        if(response.data.length) {
          //clear the original array
          this.tickets.length = 0;
          //loop through tickets array and add each one
          for(let i = 0; i < response.data.length; i++) {
            //create a new temp ticket
            let tempTicket: Ticket = new Ticket();
            //set the values for the temp ticket
            tempTicket.id = response.data[i].id;
            tempTicket.name = response.data[i].name;
            tempTicket.content = response.data[i].content;
            tempTicket.status = response.data[i].status;
            //push new temp ticket to the array of tickets
            this.tickets.push(tempTicket);
          }
        }
      }
    );
  }

  /**
   * The getTicket() method returns and sets a single ticket resource.
   */
  getTicket(id: number) {
    return this.rs.get('ticket/' + id).then(
      (response) => {
        if(response.data.length) {
          this.ticket.id = id;
          this.ticket.name = response.data[0].name;
          this.ticket.content = response.data[0].content;
        }
      }
    );
  }

  createTicket(data) {
    return this.rs.post('ticket', data).then(
      response => {
        this.tickets.unshift(this.ticket); //this may not be the best solution
        this.ticket.id = response.data[0].id;
      }
    );
  }

  updateTicket(data) {
    return this.rs.put('ticket/' + this.ticket.id, data).then(
      response => {
        this.ticket.id = response.data[0].id;
      }
    );
  } 

  //etc.

}
