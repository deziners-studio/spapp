import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StolenVehiclesService {

  private _allApi = 'http://spapp.dezinersstudio.com/api/stolen-vehicles/read.php';
  private _addApi = 'http://spapp.dezinersstudio.com/api/stolen-vehicles/add.php';

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http
      .get(this._allApi)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  addNew(data: any): Observable<any> {
    return this.http
    .post(this._addApi, data)
    .map((response: Response) => {
      return response.json();
    })
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }

}
