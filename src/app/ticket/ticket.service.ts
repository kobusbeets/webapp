import { Injectable } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';

import { RemoteService } from '../shared/remote.service';

import { Ticket } from './ticket.model'

@Injectable()
export class TicketService {

  //create an empty ticket instance
  ticket: Ticket = new Ticket();

  //create an array that will hold a bunch of tickets
  tickets: Ticket[] = [];

  //the tickets ticker is used to automatically retrieve tickets in intervals
  ticketsTicker;

  constructor(private rs: RemoteService) { }

  onInit() {
    this.getTickets();
    this.ticketsTicker = setInterval(() => { 
      this.getTickets(); 
    }, 30000); //set for every 30 seconds
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
            tempTicket.assigned_user_id = response.data[i].assigned_user_id;
            tempTicket.priority = response.data[i].priority;
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
          this.ticket.status = response.data[0].status;
          this.ticket.assigned_user_id = response.data[0].assigned_user_id;
          this.ticket.priority = response.data[0].priority;
          this.ticket.date_created = response.data[0].date_created;
          this.ticket.date_modified = response.data[0].date_modified;

          return response.data[0];
        }
        return response.data;
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
