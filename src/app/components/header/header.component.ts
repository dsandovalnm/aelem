import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() style = '';
  @Input() mainTitle = '';
  @Input() subTitle = '';
  @Input() description = '';
  @Input() descriptionFontSize = '';

  constructor() { }

  ngOnInit(): void {
  }

}
