import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FirsService {

  private _allFirsApi = 'http://spapp.dezinersstudio.com/api/fir-accident/read.php';
  private _addApi = 'http://spapp.dezinersstudio.com/api/fir-accident/add.php';
  private _oneFirsApi = 'http://spapp.dezinersstudio.com/api/fir-accident/read_one.php';
  private _updateFirApi = 'http://spapp.dezinersstudio.com/api/fir-accident/update.php';

  constructor(private http: Http) { }

  getFirs(): Observable<any> {
    return this.http
      .get(this._allFirsApi)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  updateFir(data: any): Observable<any> {
    return this.http
      .post(this._updateFirApi, data)
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
