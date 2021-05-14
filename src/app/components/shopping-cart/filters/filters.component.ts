import { Component, OnInit } from '@angular/core';
import { FilterByPriceService } from 'src/app/services/filter-by-price-service/filter-by-price.service';
import { ProductListComponent } from 'src/app/components/shopping-cart/product-list/product-list.component';
import { CatalogueServiceService } from 'src/app/services/catalogue-service/catalogue-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor(
    private priceFilterService: FilterByPriceService,
    private catalogueService: CatalogueServiceService
    ) { }

  max : number = 5;
  min : number;

  ngOnInit(): void {
    this.max = 6;
  }


  onClickSubmit(data) {
    this.priceFilterService.setMax(data.maximum);
    this.priceFilterService.setMin(data.minimum);
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
    let max = this.priceFilterService.getMax();
    let min = this.priceFilterService.getMin();
    let newlist = [];
    ProductListComponent.productList=[];
    this.catalogueService.getAllBooks().subscribe( data => {
      for (let element of data.result) {
        ProductListComponent.productList.push(element);
      }
    });
    ProductListComponent.productList.forEach(element => {
      if(element.price <= max && min <= element.price){
        newlist.push(element);
      }
    });
    ProductListComponent.productList = newlist;
    this.max = null;
    this.min = null;
  }
}
