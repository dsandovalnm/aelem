import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasDescargasService {

  constructor(  private _http: HttpClient) { }

  /* Traer todas las categorias de descargas */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}categoriasdescargas`);
  }
  getByName(categoryName: string): Observable<any> {
    return this._http.get(`${environment.API_URL}categoriasdescargas/${categoryName}`);
  }
}
