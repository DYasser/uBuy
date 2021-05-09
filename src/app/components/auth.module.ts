import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { CatalogueComponent } from 'src/app/components/catalogue/catalogue.component';


@NgModule({
  declarations: [ShoppingCartComponent, AboutUsComponent, CatalogueComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ShoppingCartComponent,
    AboutUsComponent, 
    CatalogueComponent
  ]
})
export class AuthModule { }
