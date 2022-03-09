import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as AOS from 'aos';
import { ToastrService } from 'ngx-toastr';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { Profesional } from 'src/app/interfaces/profesional';
import { ArticlesService } from 'src/app/services/articles.service';
import { ProfesionalesService } from 'src/app/services/profesionales.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-main-articulos',
  templateUrl: './main-articulos.component.html',
  styleUrls: ['./main-articulos.component.css']
})
export class MainArticulosComponent implements OnInit {

  searchArticlesForm: FormGroup;
  articles: ArticleProfesional[] = [];
  articlesFiltered: ArticleProfesional[] = [];
  profesionales: Profesional[] = [];
  results: number = 6;

  constructor(  private _ArticlesServices: ArticlesService,
                private _ProfesionalesService: ProfesionalesService,
                private _FormBuiler: FormBuilder,
                private _SearchService: SearchService,
                private _ToastrService: ToastrService) {

    AOS.init();

    this.searchArticlesForm = this._FormBuiler.group({
      titulo: [''],
      profesional_id: ['']
    });
  }
  

  async ngOnInit() {
    await this.getProfesionales();
    await this.getArticulos();
  }



  async clearArticles() {
    this.articles = [];
    await this.getArticulos();
  }



  async searchArticles() {
    let titulo = this.searchArticlesForm.value.titulo;
    let profesionalId = this.searchArticlesForm.value.profesional_id;

    if(titulo == '' && profesionalId == '') {
      this._ToastrService.error('Debe ingresar al menos uno de los dos campos', 'NO EXISTEN CRITERIOS DE BÚSQUEDA');
      return;
    }

    this.articles = [];

    /* Buscar por profesional */
    if(titulo == '' && profesionalId != '') {
      let articlesP = new Promise((resolve, reject) => {
        this._SearchService.searchById(profesionalId, `articulos/profesional`)
          .subscribe(async articles => {
            if(!articles.status) {
              reject(articles);
            }

            if(articles.response.length == 0) {
              this._ToastrService.error('No se encontraron artículos de este profesional', 'SE ENCONTRARON 0 RESULTADOS');
              await this.getArticulos();
            }else {
              this._ToastrService.success(`Hemos filtrado los resultados con los siguientes artículos:`, `SE ENCONTRARON ${articles.response.length} RESULTADOS`);
              articles.response.map((article: ArticleProfesional) => this.articles.unshift(article));
            }
            
            this.searchArticlesForm.patchValue({profesional_id: ''});
            resolve(articles.status);
          });
      });

      let result = await articlesP;
      return result;
    }

    /* Buscar por titulo */
    if(titulo != '' && profesionalId == '') {
      let articlesP = new Promise((resolve, reject) => {
        this._SearchService.searchByTerm(titulo, `articulos/titulo`)
          .subscribe(async articles => {
            if(!articles.status) {
              reject(articles);
            }

            if(articles.response.length == 0) {
              this._ToastrService.error('No se encontraron artículos por este término', 'SE ENCONTRARON 0 RESULTADOS');
              await this.getArticulos();
            }else {
              this._ToastrService.success(`Hemos filtrado los resultados con los siguientes artículos:`, `SE ENCONTRARON ${articles.response.length} RESULTADOS`);
              articles.response.map((article: ArticleProfesional) => this.articles.unshift(article));
            }

            this.searchArticlesForm.patchValue({titulo: ''});
            resolve(articles.status);
          });
      });

      let result = await articlesP;
      return result;
    }
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
