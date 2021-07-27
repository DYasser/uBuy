import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartComponent } from '../shopping-cart/cart/cart.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor( private router: Router) { }

  promo = "";
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
  }

  checkPromo(value:string){
    if(!this.promocode && (value.toLowerCase() ==="books")){
      this.cartTotal-=5;
      this.promocode = true;
    }
  }

  order(){
    CartComponent.cartItems = [];
    CartComponent.number = 0;
    this.router.navigate(['home']);
  }

}
