import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProducts } from 'src/app/infrastructure/entities/products.interface';
import { ISubcategories } from 'src/app/infrastructure/entities/subcategories.interface';
import { CartService } from 'src/app/infrastructure/services/cart.service';
import { ProductsService } from 'src/app/infrastructure/services/products.service';
import { SubcategoriesService } from 'src/app/infrastructure/services/subcategories.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  subcategory: number | null = null;
  subcategories: ISubcategories[] = []
  products: IProducts[] = [];
  filteredList: IProducts[] = [];
  categoriesList: { [id: number]: string } = {};
  productsQuantity = 0;
  constructor(private productsService: ProductsService, private subcategoriesService: SubcategoriesService, private cartService: CartService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.subcategoriesService.getSubcategoriesData().subscribe(res => {
      this.subcategories = res
      res.forEach(categoria => this.categoriesList[categoria.id] = categoria.nombre);
    })
    this.productsService.getProductsData().subscribe(res => {
      this.products = this.filteredList = res;
    });
    this.cartService.productsQuantity.subscribe(res => { if (res > 0) this.productsQuantity = res })
  }
  filterSubcategory(subcategoryId: number) {
    this.subcategory = subcategoryId
    if (subcategoryId) {
      this.filteredList = this.products.filter(product => product.id_subcategoria === subcategoryId);
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    } else {
      this.resetFilter();
    }
  }
  resetFilter() {
    this.subcategory = null;
    this.filteredList = this.products;
  }
  addToCart() {
    this.productsQuantity++;
    this.cartService.setProductsQuantity(this.productsQuantity);
    if (screen.availWidth > 768) {
      this._snackBar.open('Agregado al carrito', undefined, { duration: 3000 })
    }
  }

}
