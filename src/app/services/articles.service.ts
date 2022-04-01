import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(  private _http: HttpClient) { }

    /* Traer todos los Articulos */
  getAlll(): Observable<any> {
    return this._http.get(`${environment.API_URL}articulos`);
  }
    /* Traer los últimos N Articulos */
  getLastN(amount: number) {
    return this._http.get(`${environment.API_URL}articulos/last/${amount}`);
  }
    /* Traer Artículo por Código */
  getByCode(code: number): Observable<any> {
    return this._http.get(`${environment.API_URL}articulos/${code}`);
  }
    /* Traer articulos por titulo */
  getByTitle(titulo: string): Observable<any> {
    return this._http.get(`${environment.API_URL}articulos/titulo/${titulo}`);
  }
    /* Traer articulos por profesional */
  getByProfesional(profesionalId: number): Observable<any> {
    return this._http.get(`${environment.API_URL}articulos/profesional/${profesionalId}`)
  }
}
