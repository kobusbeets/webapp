import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RemoteService {

  serviceUrl: string = 'http://localhost/datacom/api/';

  headers: Headers;

  options: RequestOptions;

  constructor(private http: Http) { }

  updateRequestHeaders() {
    //get from local storage
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'UserName': localStorage.getItem('UserName'),
      'UserPassword': localStorage.getItem('UserPassword'),
      'AuthToken': localStorage.getItem('AuthToken')
    });

    this.options = new RequestOptions({ headers: this.headers });
  }

  post(uri, data) {
    this.updateRequestHeaders();

    return this.http.post(this.serviceUrl + uri, data, this.options).map(
      (response: Response) => {
        //transform the response into valid a json object
        const data = response.json();
        return data;
      }
    ).toPromise();
  }

  /**
   * The get() method sends a get request to a web service and returns a promise.
   */
  get(uri) {
    this.updateRequestHeaders();
    //transform the data using the map method from 'rxjs/Rx'
    return this.http.get(this.serviceUrl + uri, this.options).map(
      (response: Response) => {
        //transform the response into valid a json object
        const data = response.json();
        return data;
      }
    ).toPromise();
  }

  put(uri, data) {
    this.updateRequestHeaders();

    return this.http.put(this.serviceUrl + uri, data, this.options).map(
      (response: Response) => {
        //transform the response into valid a json object
        const data = response.json();
        return data;
      }
    ).toPromise();
  }
}
