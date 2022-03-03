import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  src: any;

  constructor(  private _SeminariosLiveService: SeminariosLiveService,
                private _ActivatedRoute: ActivatedRoute,
                private _Sanitizer: DomSanitizer) { }

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

          seminario.response.map((seminario: SeminarioLive) => {
            if(seminario.video_intro !== '') {
              let src = this._Sanitizer.bypassSecurityTrustResourceUrl(seminario.video_intro);
              seminario.video_intro = src;
            }

            this.seminarioLive = seminario;
          });

          resolve(seminario.status);
        });
    });

    let result = await seminarioP;
    return result;
  }

}
