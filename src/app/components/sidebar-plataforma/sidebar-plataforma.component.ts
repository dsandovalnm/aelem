import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-plataforma',
  templateUrl: './sidebar-plataforma.component.html',
  styleUrls: ['./sidebar-plataforma.component.css']
})
export class SidebarPlataformaComponent implements OnInit {

  @Input() collapsed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
