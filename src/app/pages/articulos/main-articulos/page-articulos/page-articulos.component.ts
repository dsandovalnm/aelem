import { Component, Input, OnInit } from '@angular/core';
import { ArticleProfesional } from 'src/app/interfaces/article';
import { ArticlesService } from 'src/app/services/articles.service';
import { ProfesionalesService } from 'src/app/services/profesionales.service';

@Component({
  selector: 'app-page-articulos',
  templateUrl: './page-articulos.component.html',
  styleUrls: ['./page-articulos.component.css']
})
export class PageArticulosComponent implements OnInit {

  @Input() articles: ArticleProfesional[] = [];

  constructor(  private _ProfesionalesService: ProfesionalesService,
                private _ArticlesServices: ArticlesService) { }

  ngOnInit(): void {
  }
}
