import { Component, OnInit } from '@angular/core';
import { ArticuloLeer } from 'src/app/interfaces/articleLeer';
import { ArticuloLeerService } from 'src/app/services/articulo-leer.service';

@Component({
  selector: 'app-main-algo-para-leer',
  templateUrl: './main-algo-para-leer.component.html',
  styleUrls: ['./main-algo-para-leer.component.css']
})
export class MainAlgoParaLeerComponent implements OnInit {

  articulosLeer: ArticuloLeer[] = [];
  articlesFiltered: ArticuloLeer[] = [];
  results = 6;

  constructor(  private _ArtiulosLeerService: ArticuloLeerService) { }

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
