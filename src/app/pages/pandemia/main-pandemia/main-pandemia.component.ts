import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { VideoPandemia } from 'src/app/interfaces/videosPandemia';
import { ArticlesPandemiaService } from 'src/app/services/articles-pandemia.service';
import { VideosPandemiaService } from 'src/app/services/videos-pandemia.service';

@Component({
  selector: 'app-main-pandemia',
  templateUrl: './main-pandemia.component.html',
  styleUrls: ['./main-pandemia.component.css']
})
export class MainPandemiaComponent implements OnInit {

  videosPandemia: VideoPandemia[] = [];
  reversedVideosPandemia: VideoPandemia[] = [];
  articulosPandemia: ArticleProfesional[] = [];

  constructor(  private _VideosPandemia: VideosPandemiaService,
                private _ArticlesPandemiaService: ArticlesPandemiaService,
                private _Sanitizer: DomSanitizer) { }

  async ngOnInit() {
    await this.getVideosPandemia();
    await this.getArticulosPandemia(); 
  }

  async getVideosPandemia() {
    let videosP = new Promise((resolve, reject) => {
      this._VideosPandemia.getAll()
        .subscribe(videosPandemia => {
          if(!videosPandemia.status) {
            reject(videosPandemia);
          }

          videosPandemia.response.map((video:VideoPandemia) => {
            let src = this._Sanitizer.bypassSecurityTrustResourceUrl(video.src);
            video.src = src;
            this.videosPandemia.unshift(video);
          });

          resolve(videosPandemia.status);
        });
    });

    let result = await videosP;
    return result;
  }

  async getArticulosPandemia() {
    let articulosP = new Promise((resolve, reject) => {
      this._ArticlesPandemiaService.getAll()
        .subscribe(articles => {
          if(!articles.status) {
            reject(articles);
          }

          articles.response.map((articulo: ArticleProfesional) => {
            this.articulosPandemia.unshift(articulo);
          });

          resolve(articles.status);
        });
    });

    let result = await articulosP;
    return result;
  }

}
