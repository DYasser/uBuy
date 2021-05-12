import { Component, OnInit } from '@angular/core';
import { FilterByPriceService } from 'src/app/services/filter-by-price-service/filter-by-price.service';
import { ProductService } from 'src/app/services/product-service/product.service';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private priceFilterService: FilterByPriceService
    ) { }

  ngOnInit(): void {
  }

  onClickSubmit(data) {
    this.priceFilterService.setMax(data.maximum);
    this.priceFilterService.setMin(data.minimum);
    ProductListComponent.productList = this.productService.getProducts();
    let max = this.priceFilterService.getMax();
    let min = this.priceFilterService.getMin();
    let newlist = [];
    ProductListComponent.productList.forEach(element => {
      if(element.price <= max && min <= element.price){
        newlist.push(element);
      }
    });
    ProductListComponent.productList = newlist;
 }

  reset(){
    this.priceFilterService.setMax(9000);
    this.priceFilterService.setMin(0);
    ProductListComponent.productList = this.productService.getProducts();
    let max = this.priceFilterService.getMax();
    let min = this.priceFilterService.getMin();
    let newlist = [];
    ProductListComponent.productList.forEach(element => {
      if(element.price <= max && min <= element.price){
        newlist.push(element);
      }
    });
    ProductListComponent.productList = newlist;

  }
}
