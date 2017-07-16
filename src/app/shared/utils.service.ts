import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor() { }

  formatDate(timestamp) {
    const date = new Date(timestamp * 1000);

    return this.months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + 
          " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  }

}
