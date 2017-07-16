import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinInProgress: boolean = false;
  formTemplate: FormGroup;

  constructor(private router: Router, private as: AuthService) { }

  ngOnInit() {
    this.formTemplate = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    }); 
  }

  onSignin() {
    this.signinInProgress = true;
    
    //localStorage.setItem('UserName', this.formTemplate.value.username);
    //localStorage.setItem('UserPassword', this.formTemplate.value.password);

    this.as.onSignin({
      'UserName': this.formTemplate.value.username,
      'UserPassword': this.formTemplate.value.password
    }).then(response => {
      this.signinInProgress = false;

      this.router.navigate(['/dashboard']);
    });
  }

}
