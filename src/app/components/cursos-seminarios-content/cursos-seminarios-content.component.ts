import { Component, Input, OnInit } from '@angular/core';
import { FullCursoSeminario } from 'src/app/interfaces/curso_seminarios';

@Component({
  selector: 'app-cursos-seminarios-content',
  templateUrl: './cursos-seminarios-content.component.html',
  styleUrls: ['./cursos-seminarios-content.component.css']
})
export class CursosSeminariosContentComponent implements OnInit {

  @Input() sectionName = '';
  @Input() content: FullCursoSeminario[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
