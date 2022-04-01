import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cartItem } from 'src/app/interfaces/cartItem';
import { FullCursoSeminario } from 'src/app/interfaces/curso_seminarios';
import { MyLocation } from 'src/app/interfaces/location';
import { FullPrecio } from 'src/app/interfaces/precio';
import { CartService } from 'src/app/services/cart.service';
import { CursoSeminarioService } from 'src/app/services/curso-seminario.service';
import { LocationService } from 'src/app/services/location.service';
import { PreciosService } from 'src/app/services/precios.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: FullCursoSeminario[] = [];
  seminarios: FullCursoSeminario[] = [];
  addCartForm: FormGroup;
  precios: FullPrecio[] = [];
  location: MyLocation = {} as MyLocation;

  constructor(  private _CursosSerminariosService: CursoSeminarioService,
                private _PreciosService: PreciosService,
                private _locationService: LocationService,
                private _FormBuilder: FormBuilder,
                private _CartService: CartService,
                private _ToastrService: ToastrService,
                private _Router: Router) {

                  this.addCartForm = this._FormBuilder.group({
                    modalidad: [''],
                    country: [''],
                    course_price: [''],
                    currency: [''],
                    course_code: [''],
                    course_name: [''],
                    course_image: ['',],
                    frecuency_sub: ['',],
                    course_quantity: ['']
                  });
                }

  async ngOnInit() {
    await this.getCursos();
    await this.getSeminarios();
    await this.getPreciosMes();
    await this.getPreciosSemestre();
    await this.getLocation();
  }


  async getLocation() {
    let locationP = new Promise((resolve, reject) => {
      this._locationService.getLocationData()
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

  async getCursos() {
    let cursosP = new Promise((resolve, reject) => {
      this._CursosSerminariosService.getCursos()
        .subscribe(cursos => {
          if(!cursos.status) {
            reject(cursos);
          }

          this.cursos = cursos.response.filter((curso:FullCursoSeminario) => curso.visible_curso_seminario == 1);
          resolve(cursos.status);
        });
    });

    let result = await cursosP;
    return result;
  }

  async getSeminarios() {
    let seminariosP = new Promise((resolve, reject) => {
      this._CursosSerminariosService.getSeminarios()
        .subscribe(seminarios => {
          if(!seminarios.status) {
            reject(seminarios);
          }

          this.seminarios = seminarios.response.filter((seminario:FullCursoSeminario) => seminario.visible_curso_seminario == 1);
          resolve(seminarios.status);
        });
    });

    let result = await seminariosP;
    return result;
  }

  async getPreciosMes() {
    let preciosMesP = new Promise((resolve, reject) => {
      this._PreciosService.getBySeminario(1)
        .subscribe(precios => {
          if(!precios.status) {
            reject(precios);
          }
          
          precios.response.map((precio:FullPrecio) => this.precios.push(precio));
          resolve(precios.status);
        });
    });

    let result = await preciosMesP;
    return result;
  }

  async getPreciosSemestre() {
    let preciosSemestreP = new Promise((resolve, reject) => {
      this._PreciosService.getBySeminario(2)
        .subscribe(precios => {
          if(!precios.status) {
            reject(precios);
          }

          precios.response.map((precio:FullPrecio) => this.precios.push(precio));
          resolve(precios.status);
        });
    });

    let result = await preciosSemestreP;
    return result;
  }

  addToCart(item: FullPrecio) {

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
