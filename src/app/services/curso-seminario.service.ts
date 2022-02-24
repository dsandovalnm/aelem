import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CursoSeminarioService {

  constructor(  private _http: HttpClient) { }

    /* Traer Todos los Cursos y Seminarios */
  getCursosSeminarios(): Observable<any> {
    return this._http.get(`${environment.API_URL}cursosseminarios`);
  }
    /* Traer Todos los Cursos */
  getCursos(): Observable<any> {
    return this._http.get(`${environment.API_URL}cursosseminarios/cursos`);
  }
    /* Traer Todos los Seminarios */
  getSeminarios(): Observable<any> {
    return this._http.get(`${environment.API_URL}cursosseminarios/seminarios`);
  }
}
