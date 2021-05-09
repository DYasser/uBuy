import { Component, Input, OnInit } from '@angular/core';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any;

  constructor() { }

  ngOnInit(): void {
  }

  remove(){
    let x = 0;
    this.cartItem.qty--;
    for(let i in CartComponent.cartItems)
    {
      if(CartComponent.cartItems[i].qty===0)
      {
        CartComponent.cartItems.splice(x,1);
      }
      x++;
    }
    
    CartComponent.cartTotal = 0;
    CartComponent.cartItems.forEach( item => {
      CartComponent.cartTotal+= item.qty*item.price;
    })
  }

}
