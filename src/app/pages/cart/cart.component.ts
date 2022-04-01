import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { cartItem } from 'src/app/interfaces/cartItem';
import { MyLocation } from 'src/app/interfaces/location';
import { CartService } from 'src/app/services/cart.service';
import { LocationService } from 'src/app/services/location.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: cartItem[] = [];
  location: MyLocation = {} as MyLocation;
  total: number = 0;
  auth: boolean = false;

  constructor(  private _CartService: CartService,
                private _ToastrSerivce: ToastrService,
                private _Router: Router,
                private _LocationService: LocationService) { }

  async ngOnInit() {
    await this.getLocation();    
    this.getCartItems();
  }

  async getLocation() {
    let locationP = new Promise((resolve, reject) => {
      this._LocationService.getLocationData()
        .subscribe(locationRes => {
          if(locationRes.error) {
            reject(locationRes.error);
          }

          this.location = locationRes;
          resolve(true);
        });
    });

    let result = await locationP;
    return result;
  }

  getCartItems() {
    this.cartItems = this._CartService.getItems();

    this.cartItems.map((item: cartItem) => {
      this.total += item.price;
    });
  }

  deleteItem(item:any) {
    this._CartService.deleteItem(item);
    this._ToastrSerivce.success('Item Eliminado', 'SE HA ELIMINADO UN ITEM DEL CARRITO DE COMPRAS');

    this.total = 0;
    this.getCartItems();
  }

  goPayment() {
    if(!this.auth) {
      Swal.fire({
        icon: 'warning',
        title: 'Usuario no autenticado',
        text: 'Debes iniciar sesión para realizar pagos',
        confirmButtonText: 'Ya tengo cuenta',
        confirmButtonColor: '#0275d8',
        showCancelButton: true,
        cancelButtonText: 'Crear Nueva Cuenta',
        cancelButtonColor: '#5bc0de',
      })
      .then(res => {
        if(res.isConfirmed) {
          this._Router.navigateByUrl('/', {skipLocationChange: true})
            .then(() => {
              this._Router.navigate(['/plataforma/login']);
            });
        }else {
          this._Router.navigateByUrl('/', {skipLocationChange: true})
            .then(() => {
              this._Router.navigate(['/plataforma/registro']);
            });
        }
      });
      return;
    }

    this._Router.navigate(['/pagar']);
  }

}
