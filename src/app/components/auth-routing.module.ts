import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from 'src/app/components/about-us/about-us.component';
import { CatalogueComponent } from 'src/app/components/catalogue/catalogue.component';
import { ShowCartInfComponent } from 'src/app/components/show-cart-inf/show-cart-inf.component';
import { OrderComponent } from 'src/app/components/order/order.component';

const routes: Routes = [
  {path: 'home', component: ShoppingCartComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'cart', component: ShowCartInfComponent},
  {path: 'order', component: OrderComponent},
  {path: '', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
