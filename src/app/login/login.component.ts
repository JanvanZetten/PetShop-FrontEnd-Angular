import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../shared/service/authentication.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl()
    });

  loading = false;
  errormessage = '';

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        success => {
          this.router.navigate([this.authenticationService.redirectUrl]);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }
}
