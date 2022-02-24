import { Component, Input, OnInit } from '@angular/core';
import { ArticuloLeer } from 'src/app/interfaces/articleLeer';

@Component({
  selector: 'app-page-articulos-leer',
  templateUrl: './page-articulos-leer.component.html',
  styleUrls: ['./page-articulos-leer.component.css']
})
export class PageArticulosLeerComponent implements OnInit {

  @Input() articulosLeer: ArticuloLeer[] = [];

  constructor() { }

  ngOnInit(): void { }

}
