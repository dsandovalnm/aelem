import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DescargasService {

  constructor(  private _http: HttpClient) { }

  /* Traer todas las descargas */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}descargas`);
  }
  /* Traer descargas por categoria */
  getByCategory(idCategory: number) :Observable<any> {
    return this._http.get(`${environment.API_URL}descargas/categoria/${idCategory}`);
  }

}
