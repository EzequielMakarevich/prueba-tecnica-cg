import { Component } from '@angular/core';
import { ProductsService } from './infrastructure/services/products.service';
import { SubcategoriesService } from './infrastructure/services/subcategories.service';
import { IProducts } from './infrastructure/entities/products.interface';
import { ISubcategories } from './infrastructure/entities/subcategories.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prueba-tecnica-cg';
  products: IProducts[] = [];
  subcategories: ISubcategories[] = [];
  constructor(private productsService: ProductsService, private subcategoriesService: SubcategoriesService) {
    this.productsService.getProductsData().subscribe(res => this.products = res)
    this.subcategoriesService.getSubcategoriesData().subscribe(res => this.subcategories = res)
  }
}
