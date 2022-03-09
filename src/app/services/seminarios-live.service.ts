import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeminariosLiveService {

  constructor(  private _http: HttpClient) { }

  /* Traer los Seminarios en Vivo */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}seminarios_live`);
  }
  /* Traer Seminario por Codigo */
  getByCode(codigo: number): Observable<any> {
    return this._http.get(`${environment.API_URL}seminarios_live/${codigo}`);
  }
  /* Traer todos los temas */
  getAllTemas(): Observable<any> {
    return this._http.get(`${environment.API_URL}seminarios_live/temas`);
  }
  /* Traer temas de un Seminario */
  getTemasByCodigo(codigo: number) :Observable<any> {
    return this._http.get(`${environment.API_URL}seminarios_live/temas/${codigo}`);
  }
}
