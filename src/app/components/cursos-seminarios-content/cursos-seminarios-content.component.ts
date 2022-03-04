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
  slidesContent: any[] = [];

  constructor() { }

  ngOnInit(): void {
    let arrIndex = 0;
    let arr: any[] = [];
    this.content.map(item => {
      arr.push(item);

      if(arr.length === 4) {
        this.slidesContent[arrIndex] = arr;
        arrIndex++;
        arr = [];
      }
    });
    console.log(this.slidesContent);
  }

  

}
