import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categoria, DescargaCategoria } from 'src/app/interfaces/descargas';
import { CategoriasDescargasService } from 'src/app/services/categorias-descargas.service';
import { DescargasService } from 'src/app/services/descargas.service';

@Component({
  selector: 'app-categoria-descargas',
  templateUrl: './categoria-descargas.component.html',
  styleUrls: ['./categoria-descargas.component.css']
})
export class CategoriasDescargasComponent implements OnInit {

  descargas: DescargaCategoria[] = [];
  descargasFiltered: DescargaCategoria[] = [];
  categoria: Categoria = {} as Categoria;
  categoriaNombre: string = 'all';

  constructor(  private _DescargasService: DescargasService,
                private _CategoriasDescargasService: CategoriasDescargasService,
                private _ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    await this.getDescargas();

    this._ActivatedRoute.params.subscribe(async params => {
      this.categoriaNombre = params.categoria;
      await this.getCategoria(this.categoriaNombre);

      this.descargasFiltered = [];
      
      if(this.categoriaNombre === 'all') {
        this.descargasFiltered = this.descargas;
      }else {
        this.descargasFiltered = this.descargas.filter((descarga: DescargaCategoria) => descarga.codigo_categoria == this.categoria.codigo);
      }
    });
  }

  async getDescargas() {
    let descargasP = new Promise((resolve, reject) => {
      this._DescargasService.getAll()
        .subscribe(descargas => {
          if(!descargas.status) {
            reject(descargas);
          }

          descargas.response.map((descarga: DescargaCategoria) => this.descargas.push(descarga));

          resolve(descargas.status);
        });
    });

    let result = await descargasP;
    return result;
  }

  async getDescargasByCategory(category: number) {
    let descargasP = new Promise((resolve, reject) => {
      this._DescargasService.getByCategory(category)
        .subscribe(descargas => {
          if(!descargas.status) {
            reject(descargas);
          }

          this.descargas = [];
          descargas.response.map((descarga: DescargaCategoria) => this.descargas.push(descarga));

          resolve(descargas.status);
        });
    });

    let result = await descargasP;
    return result;
  }

  async getCategoria(categoryName: string) {
    let categoriaP = new Promise((resolve, reject) => {
      this._CategoriasDescargasService.getByName(categoryName)
        .subscribe(category => {
          if(!category.status) {
            reject(category);
          }

          category.response.map((categoria: Categoria) => this.categoria = categoria);

          resolve(category.status);
        });
    });

    let result = await categoriaP;
    return result;
  }

}
