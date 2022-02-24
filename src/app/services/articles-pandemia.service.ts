import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesPandemiaService {

  constructor(  private _http: HttpClient) { }

    /* Traer Todos los Articulos Pandemia */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}articulospandemia`);
  }
    /* Traer Ultimos N Artículos Pandemia */
  getLastN(amount: number): Observable<any> {
    return this._http.get(`${environment.API_URL}articulospandemia/last/${amount}`);
  }
  
}
