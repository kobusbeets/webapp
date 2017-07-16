import { Injectable } from '@angular/core';

import { RemoteService } from '../shared/remote.service';

import { User } from '../user/user.model';

@Injectable()
export class AuthService {

  user: User = new User();

  isAuthenticated: boolean = false;

  constructor(private rs: RemoteService) { }

  //send a signup request to the signup api endpoint
  onSignup(data) {
    return this.rs.post('signup', data).then(
      response => {
        return response;
      }
    );
  }

  //sign in by passing form values as headers
  onSignin(headers) {
    //send a post request to sign the user in
    return this.rs.post('signin', {}, headers).then(
      response => {
        //check if the user successfully logged in
        if(response.status) {
          this.isAuthenticated = true;

          //store the auth token in the local storage
          localStorage.setItem('AuthToken', response.data.token);
        } else {
          //authentication failed so we want to log the user out
          this.isAuthenticated = false;
          localStorage.setItem('AuthToken', null);
        }

        return response;
      }
    );
  }

  onSignout() {
    this.isAuthenticated = false;
    localStorage.setItem('AuthToken', null);
    //localStorage.setItem('UserName', '');
    //localStorage.setItem('UserPassword', '');
    this.user = new User(); //clear the user object
  }

}
