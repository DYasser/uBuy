import { Component, OnInit } from '@angular/core';
import { CartComponent } from 'src/app/components/shopping-cart/cart/cart.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public static showMsg = false;

  public classRef = NavComponent;
  
  public classRef2 = CartComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  close()
  {
    NavComponent.showMsg = false;
  }


  gotoCart(){
    this.router.navigate(['cart']);
  }

}
