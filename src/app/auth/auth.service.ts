import { Injectable } from '@angular/core';

import { RemoteService } from '../shared/remote.service';

import { User } from '../user/user.model';

@Injectable()
export class AuthService {

  user: User = new User();

  isAuthenticated: boolean = false;

  constructor(private rs: RemoteService) { }

  onSignup(data) {
    return this.rs.post('signup', data).then(
      response => {
        return response;
      }
    );
  }

  onSignin(data) {
    return this.rs.post('signin', data).then(
      response => {

        if(response.status) {
          this.isAuthenticated = true;
        }

        return response;
      }
    );
  }

  onSignout() {
    this.isAuthenticated = false;
    localStorage.setItem('AuthToken', '');
    localStorage.setItem('UserName', '');
    localStorage.setItem('UserPassword', '');
    this.user = new User(); //clear the user object
  }

}
