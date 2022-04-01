import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/interfaces/descargas';
import { CategoriasDescargasService } from 'src/app/services/categorias-descargas.service';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(  private _CategoriasDescargasService: CategoriasDescargasService) { }

  async ngOnInit() {
    await this.getCategorias();
  }

  async getCategorias() {
    let categoriasP = new Promise((resolve, reject) => {
      this._CategoriasDescargasService.getAll()
        .subscribe(categorias => {
          if(!categorias.status) {
            reject(categorias);
          }

          categorias.response.map((categoria: Categoria) => {
            if(categoria.visible === 1) {
              this.categorias.push(categoria);
            }
          });

          resolve(categorias.status);
        });
    });

    let result = await categoriasP;
    return result;
  }

}
