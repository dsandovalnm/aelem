import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Precio } from 'src/app/interfaces/precio';
import { SeminarioLive } from 'src/app/interfaces/seminarioLive';
import { LocationService } from 'src/app/services/location.service';
import { PreciosService } from 'src/app/services/precios.service';
import { SeminariosLiveService } from 'src/app/services/seminarios-live.service';

@Component({
  selector: 'app-precios-seminario-live',
  templateUrl: './precios-seminario-live.component.html',
  styleUrls: ['./precios-seminario-live.component.css']
})
export class PreciosSeminarioLiveComponent implements OnInit {

  seminarioLive: SeminarioLive = {} as SeminarioLive;
  preciosSeminario: Precio[] = [];
  location: any;
  codigoSeminario = 0;

  constructor(  private _SeminariosLiveSerivce: SeminariosLiveService,
                private _PreciosService: PreciosService,
                private _LocationService: LocationService,
                private _ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    await this.getLocation();

    this._ActivatedRoute.params.subscribe(params => {
      this.codigoSeminario = params.codigo;
    });

    await this.getSeminarioLive(this.codigoSeminario);
    await this.getPrecios(this.seminarioLive.codigo_externo);
  }

  async getLocation() {
    let locationP = new Promise((resolve, reject) => {
      this._LocationService.getLocationData()
      .subscribe(location => {
        if(location.countryname == '') {
          reject(false);
        }
        
        this.location = location;
        resolve(true);
      });
    });

    let result = await locationP;
    return result;
  }

  async getPrecios(codigo: number) {
    let preciosP = new Promise((resolve, reject) => {
      this._PreciosService.getBySeminario(codigo)
        .subscribe(precios => {
          if(!precios.status) {
            reject(precios);
          }

          precios.response.map((precio: Precio) => this.preciosSeminario.push(precio));
          resolve(precios.status);
        });
    });

    let result = await preciosP;
    return result;
  }

  async getSeminarioLive(codigo: number) {
    let seminarioLiveP = new Promise((resolve, reject) => {
      this._SeminariosLiveSerivce.getByCode(codigo)
        .subscribe(seminario => {
          if(!seminario.status) {
            reject(seminario);
          }

          seminario.response.map((seminarioLive: SeminarioLive) => this.seminarioLive = seminarioLive);

          resolve(seminario.status);
        });
    });

    let result = await seminarioLiveP;
    return result;
  }

}
