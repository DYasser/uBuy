import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger-service/messenger.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public static cartItems = [

  ];
  public static cartTotal = 0;

  publicReference = CartComponent;

  constructor(
    private msg: MessengerService,
    private router: Router
    ) { }

  ngOnInit(): void {
    if(AppComponent.startpage){
      this.msg.getMsg().subscribe(
        (product: Product) => {
          this.addProductToCart(product);
        }
      ) 
      AppComponent.startpage = false;
    }
  }

  addProductToCart(product:Product){
    let productExists = false;

    for(let i in CartComponent.cartItems)
    {
      if(CartComponent.cartItems[i].productId === product.id){
        CartComponent.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if(!productExists) 
    {
      CartComponent.cartItems.push({
        productId: product.id,
        productName: product.title,
        qty: 1,
        price: product.price
      })
    }

    CartComponent.cartTotal = 0;
    CartComponent.cartItems.forEach( item => {
      CartComponent.cartTotal+= item.qty*item.price;
    })
  }

  gotoCart(){
    this.router.navigate(['cart']);
  }

}
