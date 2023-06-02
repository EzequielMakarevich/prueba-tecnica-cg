import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISubcategories } from '../entities/subcategories.interface';

@Injectable({
  providedIn: 'root'
})
export class SubcategoriesService {
  url = 'https://static.compragamer.com/test/';
  constructor(private http: HttpClient) { }
  getSubcategoriesData() {
    return this.http.get<ISubcategories[]>(this.url + 'subcategorias.json');
  }
}
