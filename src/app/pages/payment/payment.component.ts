import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/interfaces/cartItem';
import { MyLocation } from 'src/app/interfaces/location';
import { CartService } from 'src/app/services/cart.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  cartItems: cartItem[] = [];
  location: MyLocation = {} as MyLocation;
  total: number = 0;

  constructor(  private _CartService: CartService,
                private _LocationService: LocationService) { }

  async ngOnInit() {
    await this.getLocation();
    this.getCartItems();
  }

  async getLocation() {
    let locationP = new Promise((resolve, reject) => {
      this._LocationService.getLocationData()
        .subscribe(locationRes => {
          console.log(locationRes);
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

  makePayment() {
    
  }

}
