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

  ngOnInit(): void {
    this.getCursos();
    this.getSeminarios();
    this.getPreciosMes();
    this.getPreciosSemestre();
    this.getLocationService();
  }


  async getLocationService() {
    await this._locationService.getLocationData()
      .subscribe(location => {
        this.location = location;
      });
  }

  async getCursos() {
    await this._CursosSerminariosService.getCursos()
      .subscribe(cursos => {
        cursos.response.map((curso:FullCursoSeminario) => {
          if(curso.visible_curso_seminario == 1) {
            this.cursos.push(curso);
          }
        });
      })
  }

  async getSeminarios() {
    await this._CursosSerminariosService.getSeminarios()
      .subscribe(seminarios => {
        seminarios.response.map((seminario:FullCursoSeminario) => {
          if(seminario.visible_curso_seminario == 1) {
            this.seminarios.push(seminario);
          }
        });
      })
  }

  async getPreciosMes() {
    await this._PreciosService.getBySeminario(1)
      .subscribe(precios => {
        precios.response.map((precio:FullPrecio) => {
          this.preciosMes.push(precio);
        })
      });
  }

  async getPreciosSemestre() {
    await this._PreciosService.getBySeminario(2)
      .subscribe(precios => {
        precios.response.map((precio:FullPrecio) => {
          this.preciosSemestre.push(precio);
        })
      });
  }

}
