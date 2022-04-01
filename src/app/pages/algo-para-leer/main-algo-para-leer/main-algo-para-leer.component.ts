import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticuloLeer } from 'src/app/interfaces/articleLeer';
import { ArticuloLeerService } from 'src/app/services/articulo-leer.service';

@Component({
  selector: 'app-main-algo-para-leer',
  templateUrl: './main-algo-para-leer.component.html',
  styleUrls: ['./main-algo-para-leer.component.css']
})
export class MainAlgoParaLeerComponent implements OnInit {

  articulosLeerForm: FormGroup;
  articulosLeer: ArticuloLeer[] = [];
  articlesFiltered: ArticuloLeer[] = [];
  results = 6;

  constructor(  private _ArtiulosLeerService: ArticuloLeerService,
                private _ToastrService: ToastrService,
                private _FormBuiler: FormBuilder) {
    
    this.articulosLeerForm = this._FormBuiler.group({
      titulo: ['', Validators.required]
    });
  }

  async ngOnInit() {
    await this.getArticulosLeer();
  }

  async getArticulosLeer() {
    let articulosLeerP = new Promise((resolve, reject) => {
      this._ArtiulosLeerService.getAll()
        .subscribe(articulosLeer => {
          if(!articulosLeer.status) {
            reject(articulosLeer);
          }

          articulosLeer.response.map((articuloLeer: ArticuloLeer) => {
            this.articulosLeer.push(articuloLeer);
          });

          this.articulosLeer.sort(()=>Math.random()-0.5);

          resolve(articulosLeer.status);
        });
    });

    let result = await articulosLeerP;
    return result;
  }

  async searchArticles() {
    if(this.articulosLeerForm.invalid) {
      this._ToastrService.error('Debe ingresar un criterio de búsqueda', 'NO EXISTEN CRITERIOS DE BÚSQUEDA');
      return;
    }

    this.articulosLeer = [];

    let articlesLeerP = new Promise((resolve, reject) => {
      let titulo = this.articulosLeerForm.value.titulo;
      this._ArtiulosLeerService.getByTitle(titulo)
        .subscribe(async articulos => {
          if(!articulos.status) {
            reject(articulos);
          }

          if(articulos.response.length == 0) {
            this._ToastrService.error('No se encontraron artículos por este término', 'SE ENCONTRARON 0 RESULTADOS');
            await this.getArticulosLeer();
          }else {
            this._ToastrService.success(`Hemos filtrado los resultados con los siguientes artículos:`, `SE ENCONTRARON ${articulos.response.length} RESULTADOS`);
            articulos.response.map((articulo: ArticuloLeer) => this.articulosLeer.unshift(articulo));
          }

          this.articulosLeerForm.patchValue({titulo: ''});
          resolve(articulos.status);
        });
    });

    let result = await articlesLeerP;
    return result;
  }

  clearArticles() {
    
  }

  filterArticulosLeer(page: any) {
    let start = (this.results * page)-(this.results);
    let end = (this.results * page) - 1;

    this.articlesFiltered = [];
    this.articulosLeer.map((article, index) => {
      if(index >= start && index <= end) {
        this.articlesFiltered.push(article);
      }
    });
  }


}
