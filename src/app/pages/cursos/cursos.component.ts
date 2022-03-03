import { Component, OnInit } from '@angular/core';
import { FullCursoSeminario } from 'src/app/interfaces/curso_seminarios';
import { FullPrecio } from 'src/app/interfaces/precio';
import { CursoSeminarioService } from 'src/app/services/curso-seminario.service';
import { LocationService } from 'src/app/services/location.service';
import { PreciosService } from 'src/app/services/precios.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: FullCursoSeminario[] = [];
  seminarios: FullCursoSeminario[] = [];
  preciosMes: FullPrecio[] = [];
  preciosSemestre: FullPrecio[] = [];
  location: any;

  constructor(  private _CursosSerminariosService: CursoSeminarioService,
                private _PreciosService: PreciosService,
                private _locationService: LocationService) { }

  async ngOnInit() {
    await this.getCursos();
    await this.getSeminarios();
    await this.getPreciosMes();
    await this.getPreciosSemestre();
    await this.getLocationService();
  }


  async getLocationService() {
    let locationP = new Promise((resolve, reject) => {
      this._locationService.getLocationData()
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

  async getCursos() {
    let cursosP = new Promise((resolve, reject) => {
      this._CursosSerminariosService.getCursos()
        .subscribe(cursos => {
          if(!cursos.status) {
            reject(cursos);
          }

          this.cursos = cursos.response.filter((curso:FullCursoSeminario) => curso.visible_curso_seminario == 1);
          resolve(cursos.status);
        });
    });

    let result = await cursosP;
    return result;
  }

  async getSeminarios() {
    let seminariosP = new Promise((resolve, reject) => {
      this._CursosSerminariosService.getSeminarios()
        .subscribe(seminarios => {
          if(!seminarios.status) {
            reject(seminarios);
          }

          this.seminarios = seminarios.response.filter((seminario:FullCursoSeminario) => seminario.visible_curso_seminario == 1);
          resolve(seminarios.status);
        });
    });

    let result = await seminariosP;
    return result;
  }

  async getPreciosMes() {
    let preciosMesP = new Promise((resolve, reject) => {
      this._PreciosService.getBySeminario(1)
        .subscribe(precios => {
          if(!precios.status) {
            reject(precios);
          }
          
          precios.response.map((precio:FullPrecio) => this.preciosMes.push(precio));
          resolve(precios.status);
        });
    });

    let result = await preciosMesP;
    return result;
  }

  async getPreciosSemestre() {
    let preciosSemestreP = new Promise((resolve, reject) => {
      this._PreciosService.getBySeminario(2)
        .subscribe(precios => {
          if(!precios.status) {
            reject(precios);
          }

          precios.response.map((precio:FullPrecio) => this.preciosSemestre.push(precio));
          resolve(precios.status);
        });
    });

    let result = await preciosSemestreP;
    return result;
  }

}
