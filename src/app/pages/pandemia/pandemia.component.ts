import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { VideoPandemia } from 'src/app/interfaces/videosPandemia';
import { ArticlesPandemiaService } from 'src/app/services/articles-pandemia.service';
import { VideosPandemiaService } from 'src/app/services/videos-pandemia.service';

@Component({
  selector: 'app-pandemia',
  templateUrl: './pandemia.component.html',
  styleUrls: ['./pandemia.component.css']
})
export class PandemiaComponent implements OnInit {

  videosPandemia: VideoPandemia[] = [];
  reversedVideosPandemia: VideoPandemia[] = [];
  articulosPandemia: ArticleProfesional[] = [];

  constructor(  private _VideosPandemia: VideosPandemiaService,
                private _ArticlesPandemiaService: ArticlesPandemiaService,
                private _Sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getVideosPandemia();
    this.getArticulosPandemia();
  }

  async getVideosPandemia() {
    await this._VideosPandemia.getAll()
      .subscribe(async videosPandemia => {
        videosPandemia.response.map((video:VideoPandemia) => {
          let src = this._Sanitizer.bypassSecurityTrustResourceUrl(video.src);
          video.src = src;
          this.videosPandemia.unshift(video);
        });
      });
  }

  async getArticulosPandemia() {
    await this._ArticlesPandemiaService.getAll()
      .subscribe(articles => {
        articles.response.map((articulo: ArticleProfesional) => {
          this.articulosPandemia.unshift(articulo);
        });
      });
  }

}
