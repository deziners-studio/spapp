import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PoliceStationsService {

  private _apiUrl = 'http://spapp.sentr.co.in/api/police-station/read.php';

  constructor(private http: Http) { }

  public policeStations(): Observable<any> {
    return this.http
      .get(this._apiUrl)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
