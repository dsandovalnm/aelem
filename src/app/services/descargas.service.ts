import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescargasService {

  constructor(  private _http: HttpClient) { }

  /* Agregar un material de descarga */
  create(data: any): Observable<any> {
    return this._http.post(`${environment.API_URL}/descargas/create`, data);
  }
  /* Traer todas las descargas Material*/
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}descargas`);
  }
  /* Traer descargas Material por categoria */
  getByCategory(idCategory: number) :Observable<any> {
    return this._http.get(`${environment.API_URL}descargas/categoria/${idCategory}`);
  }
  /* Traer Descargas Material por Codigo */
  getByCode(codigo: number): Observable<any> {
    return this._http.get(`${environment.API_URL}descargas/${codigo}`);
  }

  /* Agregar Descarga Realizada */
  addDownload(data: any): Observable<any> {
    return this._http.post(`${environment.API_URL}descargas/addDownload`, data);
  }
  /* Traer Descargas reaizadas por nombre de material */
  getDownloadsByName(nombre: string): Observable<any> {
    return this._http.get(`${environment.API_URL}descargas/downloads/${nombre}`);
  }

}
