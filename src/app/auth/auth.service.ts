import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { User } from '../interfaces/users/user';

@Injectable()
export class AuthService {

  headers: Headers;
  options: RequestOptions;
  private _loginApi = 'http://spapp.sentr.co.in/api/users/login.php';

  constructor(
    private http: Http
  ) {
    this.headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    this.options = new RequestOptions({ headers: this.headers });
  }

  get isLoggedIn(): boolean {
    if ( this.getLoggedInUser() ) {
      return true;
    }

    return false;
  }

  public login(user): Observable<User> {
    // let body = user;
    return this.http
      .post(this._loginApi, user, this.options)
      .map((response: Response) => {
        // console.log('Response: ', response);
        this.setLoggedInUser(<User[]>response.json().records[0]);
        return <User[]>response.json();
      })
      .catch(this.handleError);
  }

  public logout(): boolean {
    localStorage.removeItem('currentUser');
    return true;
  }

  private setLoggedInUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  private getLoggedInUser(): boolean {
    if ( localStorage.getItem('currentUser') ) {
      let currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if ( currentUser.username !== '' ) {
        return true;
      }
    }

    return false;
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
