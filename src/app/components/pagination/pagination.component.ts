import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Output() pageNumber: EventEmitter<number> = new EventEmitter;
  @Input() data: any[] = [];
  @Input() results: number = 6;
  @Input() pageName: string = '';

  dataLength:number = 0;
  pages:number = 1;
  currentPage:number = 1;
  prevPage: number = 1;
  nextPage:number = 1;

  constructor(  private _ActivatedRoute: ActivatedRoute,
                private _Router: Router) {

    _Router.events.subscribe((val:any) => {
        if(val.routerEvent !== undefined) {
          this.setPageResults();
          this.sendPageNumber(this.currentPage);
        }
    });
  }

  ngOnInit(): void {
    this.setPageResults();
    this.sendPageNumber(this.currentPage);
  }

  setPageResults() {
      /* Definimos cantidad de página según los resultados */
    this.dataLength = this.data.length;
    this.pages = this.dataLength > 0 ? Math.ceil(this.dataLength / this.results) : 1;

      /* Obtenemos la página actual */
    this.currentPage = this._ActivatedRoute.snapshot.params.page !== undefined ? parseInt(this._ActivatedRoute.snapshot.params.page) : 1;
      /* Obtenemos la página anterior */
    this.prevPage = (this.currentPage - 1);
      /* Obtenemos la página siguiente */
    this.nextPage = (this.currentPage + 1);
  }

  counter(i: number ) {
    return new Array(i);
  }

  sendPageNumber(event: any) {
    this.pageNumber.emit(this.currentPage);
  }

}
