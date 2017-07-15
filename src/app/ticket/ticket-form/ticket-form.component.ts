import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

//import { RemoteService } from '../../shared/remote.service';

import { TicketService } from '../ticket.service';

import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {

  //ticket: Ticket;

  formTemplate: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private ts: TicketService) { }

  ngOnInit() {
    //get the ticket id from the url
    this.activatedRoute.params.subscribe(
      (params) => {
        if(params['id'] !== 'new') {
          this.ts.getTicket(+params['id']).then(() => {
            //check if the form template is already created
            if(this.formTemplate) {
              //update the form template data
              this.formTemplate.patchValue(this.ts.ticket);
            }
          });
        } else {
          this.ts.ticket = new Ticket();
        }
      }
    );
    
    this.formTemplate = new FormGroup({
      'name': new FormControl(this.ts.ticket.name, Validators.required),
      'content': new FormControl(this.ts.ticket.content, Validators.required),
      'secret': new FormControl('pet')
    }); 
  }

  onSave() { //(form: NgForm) {
    if(!this.ts.ticket.id) {
      //create a new ticket resource
      this.ts.createTicket(this.formTemplate.value).then(
        data => {
          this.router.navigate(['tickets', 'edit', this.ts.ticket.id]);
        }
      );
    } else {
      //update an existing ticket resource
      console.log('this is an existing ticket');
      this.ts.updateTicket(this.formTemplate.value).then(
        data => {
          //this.router.navigate(['tickets', 'edit', this.ts.ticket.id]);
        }
      );
    }
  }

  //validEmail(control: FormControl): {[s: string]: boolean} {
  //  if(control.value === '') {
  //    return {'EmailIsNotValid' : true};
  //  } 
  //  return null;
  //}
  //
  ////async validator - reaching out to a web service or something
  //emailExist(control: FormControl): Promise<any> | Observable<any> {
  //  const promise = new Promise<any>((resolve, reject) => {
  //    //if conditions are met
  //    resolve({'EmailIsNotAvailable' : true});
  //    //if email is available resolve null
  //    //resolve(null);
  //  });
  //  return promise;
  //}
}
