import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

import { ProductService } from 'src/app/services/product.service';
import { FilterByPriceService } from 'src/app/services/filter-by-price.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public static productList : Product[] = []

  public classReference = ProductListComponent;

  constructor(
    private productService: ProductService,
    private priceFilterService: FilterByPriceService) { }

  ngOnInit(){
    ProductListComponent.productList = this.productService.getProducts();
    console.log(ProductListComponent.productList);
    let max = this.priceFilterService.getMax();
    let min = this.priceFilterService.getMin();
    let newlist = [];
    ProductListComponent.productList.forEach(element => {
      if(element.price < max && min < element.price){
        newlist.push(element);
      }
    });
    ProductListComponent.productList = newlist;
  }
  

}
