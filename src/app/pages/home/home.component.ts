import { AfterContentInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { CharlaAbierta } from 'src/app/interfaces/charlasAbiertas';
import { VideoPandemia } from 'src/app/interfaces/videosPandemia';
import { ArticlesService } from 'src/app/services/articles.service';
import { CharlasAbiertasService } from 'src/app/services/charlas-abiertas.service';
import { VideosPandemiaService } from 'src/app/services/videos-pandemia.service';
import Swiper from 'swiper/bundle';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  articles: ArticleProfesional[] = [];
  charlasAbiertas: CharlaAbierta[] = [];
  videosPandemia: VideoPandemia[] = [];

  bannerImgs = [
    { src : 'banner_1.jpg' },
    { src : 'banner_2.jpg' },
    { src : 'banner_3.jpg' }
  ];

  constructor(  private _CharlasAbiertasService: CharlasAbiertasService,
                private _VideosPandemia: VideosPandemiaService,
                private _ArticlesService: ArticlesService,
                private _Sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getLastVideosCuarentena();
    this.getCharlasAbiertas();
    this.getLastArticles();
  }

  ngAfterContentInit(): void {
    const swiper = new Swiper('.swiper');
  }

  async getCharlasAbiertas() {
    await this._CharlasAbiertasService.getAll()
      .subscribe( charlas => {
        charlas.response.map((charla: CharlaAbierta) => {
          this.charlasAbiertas.push(charla);
        });
      });
  }

  async getLastVideosCuarentena() {
    await this._VideosPandemia.getLastN(3)
      .subscribe(videos => {
        videos.response.map((video: VideoPandemia) => {
          let src = this._Sanitizer.bypassSecurityTrustResourceUrl(video.src);
          video.src = src;
          this.videosPandemia.push(video);
        });
      });
  }

  async getLastArticles() {
    await this._ArticlesService.getLastN(3)
      .subscribe((articles:any) => {
        articles.response.map((article:ArticleProfesional) => {
          this.articles.push(article);
        });
      });
  }

}
