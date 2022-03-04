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
    { src : 'banner_1.jpg', src_mb: 'banner_1_mb.jpg' },
    { src : 'banner_2.jpg', src_mb: 'banner_2_mb.jpg' },
    { src : 'banner_3.jpg', src_mb: 'banner_3_mb.jpg' }
  ];

  constructor(  private _CharlasAbiertasService: CharlasAbiertasService,
                private _VideosPandemia: VideosPandemiaService,
                private _ArticlesService: ArticlesService,
                private _Sanitizer: DomSanitizer) {}

  async ngOnInit() {
    await this.getLastVideosCuarentena();
    await this.getCharlasAbiertas();
    await this.getLastArticles();
  }

  ngAfterContentInit(): void {
    const swiper = new Swiper('.swiper');
  }

  async getCharlasAbiertas() {
    let charlasP = new Promise((resolve, reject) => {
      this._CharlasAbiertasService.getAll()
        .subscribe( charlas => {
          if(!charlas.status) {
            reject(charlas);
          }
          
          charlas.response.map((charla: CharlaAbierta) => this.charlasAbiertas.push(charla));

          resolve(charlas.status);
        });
    });

    let result = await charlasP;
    return result;
  }

  async getLastVideosCuarentena() {
    let videosP = new Promise((resolve, reject) => {
      this._VideosPandemia.getLastN(3)
        .subscribe(videos => {
          if(!videos.status) {
            reject(videos);
          }

          videos.response.map((video: VideoPandemia) => {
            let src = this._Sanitizer.bypassSecurityTrustResourceUrl(video.src);
            video.src = src;
            this.videosPandemia.push(video);
          });

          resolve(videos.status);
        });
    });


    let result = await videosP;
    return result;
  }

  async getLastArticles() {
    let articlesP = new Promise((resolve, reject) => {
      this._ArticlesService.getLastN(3)
        .subscribe((articles:any) => {
          if(!articles.status) {
            reject(articles);
          }
          
          articles.response.map((article:ArticleProfesional) => this.articles.push(article));

          resolve(articles.status);
        });
    });

    let result = await articlesP;
    return result;
  }

}
