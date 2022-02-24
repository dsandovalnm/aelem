import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(  private _http: HttpClient) { }

  getLocationData(): Observable<any> {
    return this._http.get(`${environment.LOCATION_URL}`);
  }
}
