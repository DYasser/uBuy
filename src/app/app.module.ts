import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'src/app/components/auth-routing.module';
import { ShowCartInfComponent } from 'src/app/components/show-cart-inf/show-cart-inf.component';
import { OrderComponent } from 'src/app/components/order/order.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    ShowCartInfComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthRoutingModule,
    CommonModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
