import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class RemoteService {

  //the api service url
  serviceUrl: string = 'http://localhost/datacom/api/';

  headers: Headers;

  options: RequestOptions;

  constructor(private http: Http) { }

  updateRequestHeaders(headers = null) {
    //get default headers from local storage
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'AuthToken': localStorage.getItem('AuthToken')
    });

    //add additional headers when needed
    if(headers) {
      for(let key in headers) {
        this.headers.append(key, headers[key]);
      }
    }

    //set the request options
    this.options = new RequestOptions({ headers: this.headers });
  }

  //make a post request to the api endpoint
  post(uri, data, headers = null) {
    this.updateRequestHeaders(headers);

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
  get(uri, headers = null) {
    this.updateRequestHeaders(headers);
    //transform the data using the map method from 'rxjs/Rx'
    return this.http.get(this.serviceUrl + uri, this.options).map(
      (response: Response) => {
        //transform the response into valid a json object
        const data = response.json();
        return data;
      }
    ).toPromise();
  }

  put(uri, data, headers = null) {
    this.updateRequestHeaders(headers);

    return this.http.put(this.serviceUrl + uri, data, this.options).map(
      (response: Response) => {
        //transform the response into valid a json object
        const data = response.json();
        return data;
      }
    ).toPromise();
  }
}
