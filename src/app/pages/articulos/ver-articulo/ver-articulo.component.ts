import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-ver-articulo',
  templateUrl: './ver-articulo.component.html',
  styleUrls: ['./ver-articulo.component.css']
})
export class VerArticuloComponent implements OnInit {

  articleId: number;
  article: ArticleProfesional = {} as ArticleProfesional;
  otherArticles: ArticleProfesional[] = [];
  otherArtLength: number = 0;

  constructor(  private _ActivatedRoute: ActivatedRoute,
                private _ArticlesService: ArticlesService) {
    this.articleId = this._ActivatedRoute.snapshot.params.codigo;
  }

  async ngOnInit() {
    await this.getArticle();
    await this.getOtherArticles();

    this._ActivatedRoute.params.subscribe(params => {
      this.articleId = params.codigo;
      this.getArticle();
      this.otherArticles.sort(()=>Math.random()-0.5);
    });
    
  }

  async getOtherArticles() {
    let articlesP = new Promise((resolve, reject) => {
      this._ArticlesService.getAlll()
        .subscribe(articles => {
          if(!articles.status) {
            reject(articles);
          }

          articles.response.map((article:ArticleProfesional) => {
            this.otherArticles.push(article);
          });

          this.otherArticles.sort(()=>Math.random()-0.5);

          resolve(articles.status);
        });
    });

    let result = await articlesP;
    return result;
  }

  async getArticle() {
    let articleP = new Promise((resolve, reject) => {
      this._ArticlesService.getByCode(this.articleId)
        .subscribe(article => {
          if(!article.status) {
            reject(article);
          }

          article.response.map((art:ArticleProfesional) => {
            this.article = art;
          })

          resolve(article.status);
        });
    });

    let result = await articleP;
    return result;
  }

}
