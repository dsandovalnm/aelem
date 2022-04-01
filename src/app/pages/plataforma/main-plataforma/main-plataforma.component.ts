import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-plataforma',
  templateUrl: './main-plataforma.component.html',
  styleUrls: ['./main-plataforma.component.css']
})
export class MainPlataformaComponent implements OnInit {

  collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.collapsed = !this.collapsed;
  }

}
