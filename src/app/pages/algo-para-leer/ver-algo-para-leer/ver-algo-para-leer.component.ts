import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ArticuloLeer } from 'src/app/interfaces/articleLeer';
import { ArticuloLeerService } from 'src/app/services/articulo-leer.service';

@Component({
  selector: 'app-ver-algo-para-leer',
  templateUrl: './ver-algo-para-leer.component.html',
  styleUrls: ['./ver-algo-para-leer.component.css']
})
export class VerAlgoParaLeerComponent implements OnInit {

  articlesLeer: ArticuloLeer[] = [];
  articleLeer: ArticuloLeer = {} as ArticuloLeer;
  articleCode: number;

  constructor(  private _ArticuloLeerService: ArticuloLeerService,
                private _ActivatedRoute:  ActivatedRoute,
                private _Sanitizer: DomSanitizer) {

                  this.articleCode = this._ActivatedRoute.snapshot.params.codigo;
                }

  async ngOnInit() {
    await this.getArticleLeer(this.articleCode);
    await this.getArticlesLeer();

    this._ActivatedRoute.params.subscribe(params => {
      this.articleCode = params.codigo;
      this.getArticleLeer(this.articleCode);
      this.articlesLeer.sort(()=> Math.random()-0.5);
    });
  }

  async getArticlesLeer() {
    let articlesLeerP = new Promise((resolve, reject) => {
      this._ArticuloLeerService.getAll()
        .subscribe(articlesLeer => {
          if(!articlesLeer.status) {
            reject(articlesLeer);
          }

          articlesLeer.response.map((article:ArticuloLeer) => {
            this.articlesLeer.push(article);
          });

          this.articlesLeer.sort(()=>Math.random()-0.5);

          resolve(articlesLeer.status);
        });
    });

    let result = await articlesLeerP;
    return result;
  }

  async getArticleLeer(codigo: number) {
    let articleLeerP = new Promise((resolve, reject) => {
      this._ArticuloLeerService.getByCode(codigo)
        .subscribe(articuloLeer => {
          if(!articuloLeer.status) {
            reject(articuloLeer);
          }

          articuloLeer.response.map((article: ArticuloLeer) => {
            this.articleLeer = article;
          });

          resolve(articuloLeer.status);
        });
    });

    let result = await articleLeerP;
    return result;
  }

}
