import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  API_URL = 'https://restcountries.com/v2/';

  constructor(  private _http: HttpClient) { }

  getCountries(): Observable<any> {
    return this._http.get(`${this.API_URL}all`);
  }
}
