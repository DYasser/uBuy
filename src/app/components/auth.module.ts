import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { CatalogueComponent } from 'src/app/components/catalogue/catalogue.component';
import { ShowCartInfComponent } from './show-cart-inf/show-cart-inf.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [ShoppingCartComponent, CatalogueComponent, ShowCartInfComponent, OrderComponent, LoginComponent, ResetPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ShoppingCartComponent,
  ]
})
export class AuthModule { }
