import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { ArticlesPandemiaService } from 'src/app/services/articles-pandemia.service';

@Component({
  selector: 'app-ver-articulo-pandemia',
  templateUrl: './ver-articulo-pandemia.component.html',
  styleUrls: ['./ver-articulo-pandemia.component.css']
})
export class VerArticuloPandemiaComponent implements OnInit {

  article: ArticleProfesional = {} as ArticleProfesional;
  otherArticles: ArticleProfesional[] = [];
  articleCode: number = 0;

  constructor(  private _ArticlesPandemiaService: ArticlesPandemiaService,
                private _ActivatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this._ActivatedRoute.params.subscribe(async params => {
      this.articleCode = params.codigo;
      await this.getArticle(this.articleCode);
    });
    await this.getArticles();
  }

  async getArticle(codigo: number) {
    let articleP = new Promise((resolve, reject) => {
      this._ArticlesPandemiaService.getByCode(codigo)
        .subscribe(article => {
          if(!article.status) {
            reject(article);
          }

          article.response.map((article:ArticleProfesional) => this.article = article);

          resolve(article.status);
        });
    });

    let result = await articleP;
    return result;
  }

  async getArticles() {
    let articlesP = new Promise((resolve, reject) => {
      this._ArticlesPandemiaService.getAll()
        .subscribe(articles => {
          if(!articles.status) {
            reject(articles);
          }

          articles.response.map((article:ArticleProfesional) => this.otherArticles.push(article));
        });
    });
  }

}
