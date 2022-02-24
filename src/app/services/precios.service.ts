import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  constructor(  private _http: HttpClient) { }

  /* Traer todos los Precios */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}precios`);
  }
  /* Traer precios de un Seminario */
  getBySeminario(codigo: number): Observable<any> {
    return this._http.get(`${environment.API_URL}precios/seminario/${codigo}`);
  }
}
