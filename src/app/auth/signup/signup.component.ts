import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupInProgress: boolean = false;
  formTemplate: FormGroup;

  constructor(private router: Router, private as: AuthService) { }

  ngOnInit() {
    this.formTemplate = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    }); 
  }

  onSignup() {
    //console.log(this.formTemplate.value);
    this.signupInProgress = true;
    this.as.onSignup(this.formTemplate.value).then(response => {
      this.signupInProgress = false;
      //redirect the user
      this.router.navigate(['/signin']);
    });
  }
}
