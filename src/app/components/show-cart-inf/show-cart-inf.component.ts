import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../shopping-cart/cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cart-inf',
  templateUrl: './show-cart-inf.component.html',
  styleUrls: ['./show-cart-inf.component.css']
})
export class ShowCartInfComponent implements OnInit {

  constructor(private router: Router) { }

  cartItems = [];

  ngOnInit(): void {
    this.cartItems = CartComponent.cartItems;
  }

  gotoOrder()
  {
    this.router.navigate(['order']);
  }

}
