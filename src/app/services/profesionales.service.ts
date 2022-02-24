import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalesService {

  constructor(  private _http: HttpClient) { }

  /* Traer Todos los Profesionales */
  getAll(): Observable<any> {
    return this._http.get(`${environment.API_URL}profesionales`);
  }
}
