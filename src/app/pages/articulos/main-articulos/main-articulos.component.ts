import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { Profesional } from 'src/app/interfaces/profesional';
import { ArticlesService } from 'src/app/services/articles.service';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-main-articulos',
  templateUrl: './main-articulos.component.html',
  styleUrls: ['./main-articulos.component.css']
})
export class MainArticulosComponent implements OnInit {

  articles: ArticleProfesional[] = [];
  articlesFiltered: ArticleProfesional[] = [];
  profesionales: Profesional[] = [];
  results: number = 6;

  constructor(  private _ArticlesServices: ArticlesService,
                private _ProfesionalesService: ProfesionalesService) {

    AOS.init();
  }

  async ngOnInit() {
    await this.getProfesionales();
    await this.getArticulos();
  }

  async getProfesionales() {
    let profesionalesP = new Promise((resolve, reject) => {
      this._ProfesionalesService.getAll()
        .subscribe(profesionales => {
          if(!profesionales.status) {
            reject(profesionales);
          }

          profesionales.response.map((profesional:Profesional) => {
            this.profesionales.push(profesional);
          });

          resolve(profesionales.status);
        });
    });

    let result = await profesionalesP;
    return result;
  }

  async getArticulos() {
    let articlesP = new Promise((resolve, reject) => {
      this._ArticlesServices.getAlll()
        .subscribe(articles => {
          if(!articles.status) {
            reject(articles);
          }

          articles.response.map((article:ArticleProfesional) => {
            this.articles.push(article)
          });

          resolve(articles.status);
        });
    });

    let result = await articlesP;
    return result;
  }

  filterArticles(page: any) {
    let start = (this.results * page)-(this.results);
    let end = (this.results * page) - 1;

    this.articlesFiltered = [];
    this.articles.map((article, index) => {
      if(index >= start && index <= end) {
        this.articlesFiltered.push(article);
      }
    });
  }

}
