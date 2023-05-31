import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from '../entities/products.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://static.compragamer.com/test/'
  constructor(private http: HttpClient) { }
  getProductsData() {
    return this.http.get<IProducts[]>(this.url + 'productos.json')
  }
}
