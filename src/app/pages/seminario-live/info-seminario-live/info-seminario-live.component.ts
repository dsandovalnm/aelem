import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeminarioLive } from 'src/app/interfaces/seminarioLive';
import { SeminariosLiveService } from 'src/app/services/seminarios-live.service';

@Component({
  selector: 'app-info-seminario-live',
  templateUrl: './info-seminario-live.component.html',
  styleUrls: ['./info-seminario-live.component.css']
})
export class InfoSeminarioLiveComponent implements OnInit {

  seminarioLive: SeminarioLive = {} as SeminarioLive;
  codigoSeminarioLive: number = 0;

  constructor(  private _SeminariosLiveService: SeminariosLiveService,
                private _ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this._ActivatedRoute.params.subscribe(params => {
      this.codigoSeminarioLive = params.codigo;
    });

    await this.getSeminarioLive(this.codigoSeminarioLive);
  }

  async getSeminarioLive(codigo: number) {
    let seminarioP = new Promise((resolve, reject) => {
      this._SeminariosLiveService.getByCode(codigo)
        .subscribe(seminario => {
          if(!seminario.status) {
            reject(seminario);
          }

          seminario.response.map((seminario: SeminarioLive) => this.seminarioLive = seminario);

          resolve(seminario.status);
        });
    });

    let result = await seminarioP;
    return result;
  }

}
