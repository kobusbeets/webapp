import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, public as: AuthService) { }

  ngOnInit() {
  }

  onSignout() {
    this.as.onSignout();

    //redirect the user to the signup page
    this.router.navigate(['/signin']);
  }

}