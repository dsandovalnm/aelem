import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideosPandemiaService {

  constructor(  private _http: HttpClient) { }

    /* Traer todos los videos */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}videospandemia`);
  }
    /* Traer los N últimos */
  getLastN(amount: number): Observable<any> {
    return this._http.get(`${environment.API_URL}videospandemia/last/${amount}`);
  }

}
