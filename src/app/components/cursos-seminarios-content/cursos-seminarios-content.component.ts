import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cartItem } from 'src/app/interfaces/cartItem';
import { FullCursoSeminario } from 'src/app/interfaces/curso_seminarios';
import { MyLocation } from 'src/app/interfaces/location';
import { FullPrecio } from 'src/app/interfaces/precio';
import { CartService } from 'src/app/services/cart.service';
import { LocationService } from 'src/app/services/location.service';
import { PreciosService } from 'src/app/services/precios.service';

@Component({
  selector: 'app-cursos-seminarios-content',
  templateUrl: './cursos-seminarios-content.component.html',
  styleUrls: ['./cursos-seminarios-content.component.css']
})
export class CursosSeminariosContentComponent implements OnInit {

  @Input() sectionName = '';
  @Input() content: FullCursoSeminario[] = [];
  slidesContent: any[] = [];
  location: MyLocation = {} as MyLocation;
  precios: FullPrecio[] = [];

  constructor(  private _CartService: CartService,
                private _ToastrService: ToastrService,
                private _LocationService: LocationService,
                private _PreciosService: PreciosService,
                private _Router: Router) { }

  async ngOnInit() {
    await this.getLocation();
    await this.getPrecios();
    
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
  }

  async getLocation() {
    let locationP = new Promise((resolve, reject) => {
      this._LocationService.getLocationData()
      .subscribe(location => {
        if(location.countryname == '') {
          reject(false);
        }
        
        this.location = location;
        resolve(true);
      });
    });

    let result = await locationP;
    return result;
  }

  async getPrecios() {
    let preciosP = new Promise((resolve, reject) => {
      this._PreciosService.getAll()
        .subscribe(precios => {
          if(!precios.status) {
            reject(precios);
          }

          precios.response.map((precio: FullPrecio) => this.precios.push(precio));
          resolve(precios.status);
        });
    });

    let result = await preciosP;
    return result;
  }

  addToCart(item: any) {
    let addItem: cartItem = {
      modalidad: 'online',
      country: this.location.countryname,
      price: item.valor,
      currency: item.moneda,
      code: item.codigo_seminario,
      name: item.nombre_seminario,
      image: item.imagen,
      frecuency: item.recurrencia,
      quantity: 1
    }

    let addCartItem = this._CartService.addItem(addItem);
    
    if(addCartItem.code == 200) {
      this._ToastrService.success(addCartItem.message, 'SE HA AGREGADO UN ITEM AL CARRITO');
      this._Router.navigateByUrl('/', {skipLocationChange: true})
        .then(() => {
          this._Router.navigate(['/carrito']);
        });
    }else if(addCartItem.code == 300) {
      this._ToastrService.warning(addCartItem.message, 'ESTE ITEM YA SE ENCUENTRA AGREGADO EN EL CARRITO');
    }
    
  }
}
