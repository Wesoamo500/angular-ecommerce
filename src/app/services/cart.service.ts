import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {
  }
  numberOfProducts: number = 0;

  updateNumberOfProducts(count: number) {
    this.numberOfProducts = count;
  }
}
