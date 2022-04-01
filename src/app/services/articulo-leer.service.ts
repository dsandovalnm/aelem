import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticuloLeerService {

  constructor(  private _http: HttpClient) { }

  /* Traer todos los articulos leer */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}articulosleer`);
  }
  /* Traer un Articulo por Código */
  getByCode(codigo: number): Observable<any> {
    return this._http.get(`${environment.API_URL}articulosleer/${codigo}`);
  }
  /* Traer un articulo por titulo */
  getByTitle(title: string): Observable<any> {
    return this._http.get(`${environment.API_URL}articulosleer/titulo/${title}`);
  }
}
