import { Component, HostListener, OnInit } from '@angular/core';
import { SeminarioLive } from 'src/app/interfaces/seminarioLive';
import { SeminariosLiveService } from 'src/app/services/seminarios-live.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  fixed: boolean = false;
  seminariosLive: SeminarioLive[] = [];
  seminariosLiveOn: SeminarioLive[] = [];

  @HostListener('window:scroll', ['$event'])
    windowScroll($event: Event) {
      let top = window.scrollY;

      if(top > 0) {
        this.fixed = true;
      }else {
        this.fixed = false;
      }
    }

  constructor(  private _SeminariosLiveService: SeminariosLiveService) { }

  async ngOnInit() {
    await this.getSeminariosLive();

    this.seminariosLiveOn = this.seminariosLive.filter(seminario => seminario.visible == 1);
  }

  async getSeminariosLive() {
    let seminarioLiveP = new Promise((resolve, reject) => {
      this._SeminariosLiveService.getAll()
        .subscribe(seminariosLive => {
          if(!seminariosLive.status) {
            reject(seminariosLive);
          }

          seminariosLive.response.map((seminarioLive: SeminarioLive) => this.seminariosLive.push(seminarioLive));

          resolve(seminariosLive.status);
        });
    });

    let result = await seminarioLiveP;
    return result;
  }

}
