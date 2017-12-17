import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MissingPersonsService {

  private _allApi = 'http://spapplication.sentr.co.in/api/missing-persons/read.php';

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http
      .get(this._allApi)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
