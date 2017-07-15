import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    //make sure there auth storage items are created.
    if(localStorage.getItem('AuthToken') == null) {
      localStorage.setItem('AuthToken', '');
    }

    if(localStorage.getItem('UserName') == null) {
      localStorage.setItem('UserName', '');
    }

    if(localStorage.getItem('UserPassword') == null) {
      localStorage.setItem('UserPassword', '');
    }
  }
}
