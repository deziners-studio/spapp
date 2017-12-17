import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  onLoginSubmit(model) {
    // console.log('Model: ', model);
    // tslint:disable-next-line:prefer-const
    let userData = model;
    this.auth.login(userData)
    .subscribe(
      (resultArray) => {
        // console.log('resultArray:', resultArray);
        // tslint:disable-next-line:prefer-const
        let data = resultArray;
        if ( data) {
          this.router.navigate(['dashboard']);
        }
      },
      (error) => {
        console.log('Error:: ' + error);
      }
    );
  }

}
