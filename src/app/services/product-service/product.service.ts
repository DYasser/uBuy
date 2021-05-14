import { Injectable } from '@angular/core';

import { Product } from '../../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
  ]

  constructor() { }

  getProducts():Product[] {
    return this.products;
  }
}
