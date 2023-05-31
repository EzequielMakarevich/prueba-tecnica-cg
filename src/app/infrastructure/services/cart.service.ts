import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsQuantity = new BehaviorSubject<number>(0);
  setProductsQuantity(quantity:number) {
    this.productsQuantity.next(quantity);
  }
}
