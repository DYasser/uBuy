import { Injectable } from '@angular/core';

import { Product } from '../models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
    new Product(1, 'prod 1', 'this is prod 1', 100),
    new Product(2, 'prod 2', 'this is prod 2', 150),
    new Product(3, 'prod 3', 'this is prod 3', 20),
    new Product(4, 'prod 4', 'this is prod 4', 130),
    new Product(5, 'prod 5', 'this is prod 5', 600),
    new Product(6, 'prod 6', 'this is prod 6', 520),
  ]

  constructor() { }

  getProducts():Product[] {
    return this.products;
  }
}
