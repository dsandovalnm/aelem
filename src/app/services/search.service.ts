import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(  private _http: HttpClient) { }

  searchByTerm(term: string, location: string): Observable<any> {
    return this._http.get(`${environment.API_URL}${location}/${term}`);
  }

  searchById(id: number, location: string): Observable<any> {
    return this._http.get(`${environment.API_URL}${location}/${id}`)
  }
}
