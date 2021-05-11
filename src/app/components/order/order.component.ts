import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../shopping-cart/cart/cart.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor() { }

  cartItems = [];
  cartTotal = 0;
  nbr = 0;

  promocode: boolean;

  ngOnInit(): void {
    this.cartItems = CartComponent.cartItems;
    this.cartItems.forEach( item => {
      this.nbr+= 1*item.qty;
    });
    this.cartTotal = CartComponent.cartTotal;
    this.promocode = false;
    console.log(this.cartItems);
  }

  checkPromo(){
    this.promocode = true;
    this.cartTotal-=5;
  }

}
