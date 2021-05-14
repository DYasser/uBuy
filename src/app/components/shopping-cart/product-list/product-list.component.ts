import { Component, OnInit } from '@angular/core';

import { FilterByPriceService } from 'src/app/services/filter-by-price-service/filter-by-price.service';
import { CatalogueServiceService } from 'src/app/services/catalogue-service/catalogue-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public static productList = []

  public classReference = ProductListComponent;

  constructor(
    private priceFilterService: FilterByPriceService,
    private catalogueService: CatalogueServiceService) { }

  ngOnInit(){
    ProductListComponent.productList=[];
    this.catalogueService.getAllBooks().subscribe( data => {
      for (let element of data.result) {
        ProductListComponent.productList.push(element);
      }
    });
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
