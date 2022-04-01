import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { cartItem } from '../interfaces/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(  private _http: HttpClient) { }



  addItem(item: cartItem) {
    let check: any = this.checkExistentItem(item);

    console.log(check);

    if(check.exists) {
      return {
        status: false,
        code: 300,
        message: 'Item Existente'
      }
    }

    localStorage.setItem('cart', JSON.stringify(check.cart));
    
    return {
      status: true,
      code: 200,
      message: 'Item agregado correctamente'
    }
  }



  private checkExistentItem(item: cartItem) {

    let cart: any = localStorage.getItem('cart');
    let arrayCart: cartItem[] = [];

    if(cart == null) {
      arrayCart.push(item);
        return {
          exists: false,
          cart: arrayCart
        };
    }

    arrayCart = JSON.parse(cart);

    for(let i=0; i<arrayCart.length; i++) {
      if(arrayCart[i].code == item.code) {
        return {
          exists: true,
          cart: []
        }
      }
    }

    arrayCart.push(item);

    return {
      exists: false,
      cart: arrayCart
    }
  }



  getItems() {
    let cartItems: cartItem[] = JSON.parse(<string>localStorage.getItem('cart')) || [];
    return cartItems;
  }



  deleteItem(code:any) {
    let cartItems: cartItem[] = this.getItems();
    let newCartItems: cartItem[] = cartItems.filter((item: cartItem) => item.code != code);

    localStorage.setItem('cart', JSON.stringify(newCartItems));
  }

  

  encryptItems() {
    
  }
}
