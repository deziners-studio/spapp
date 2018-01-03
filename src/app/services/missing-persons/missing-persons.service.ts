import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MissingPersonsService {

  private _allApi = 'http://spapp.sentr.co.in/api/missing-persons/read.php';
  private _addApi = 'http://spapp.sentr.co.in/api/missing-persons/add.php';
  private _getOneApi = 'http://spapp.sentr.co.in/api/missing-persons/read_one.php';
  private _getByParamsApi = 'http://spapp.sentr.co.in/api/missing-persons/read_byparams.php';

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http
      .get(this._allApi)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  getByParams(model): Observable<any> {
      return this.http
      .post(this._getByParamsApi, model)
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

  // addNew(fileupload: any): Observable<any> {
  //   let input = new FormData();
  //   input.append('file', fileupload);
  //   console.log('input', input);
  //   return;
  // }

}
