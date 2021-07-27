import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from 'src/app/components/shopping-cart/shopping-cart.component';
import { CatalogueComponent } from 'src/app/components/catalogue/catalogue.component';
import { ShowCartInfComponent } from 'src/app/components/show-cart-inf/show-cart-inf.component';
import { OrderComponent } from 'src/app/components/order/order.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path: 'home', component: ShoppingCartComponent},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'cart', component: ShowCartInfComponent},
  {path: 'order', component: OrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: '', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
