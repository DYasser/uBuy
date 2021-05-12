import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterByPriceService {

  max: number = 9000;
  min: number = 0;

  constructor() { }
  
  getMax() {
    return this.max;
  }
  
  getMin() {
    return this.min;
  }

  setMax(max:number){
    this.max = max;
  }
  setMin(min:number){
    this.min = min;
  }
}
