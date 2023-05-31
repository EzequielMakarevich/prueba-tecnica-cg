import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IProducts } from 'src/app/infrastructure/entities/products.interface';
import { CartService } from 'src/app/infrastructure/services/cart.service';
import { ProductsService } from 'src/app/infrastructure/services/products.service';
import { SubcategoriesService } from 'src/app/infrastructure/services/subcategories.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input() subcategory!: number | null;
  products: IProducts[] = [];
  productsQuantity = 0;
  filteredList: IProducts[] = [];
  categoriesList: { [id: number]: string } = {};
  constructor(private productsService: ProductsService,private subcategoriesService: SubcategoriesService, private cartService: CartService) { }

  ngOnInit(): void {
    this.subcategoriesService.getSubcategoriesData().subscribe(res => {
      res.forEach(categoria =>  this.categoriesList[categoria.id] = categoria.nombre);
    })
    this.productsService.getProductsData().subscribe(res => {
      this.products = this.filteredList = res;
    });
  }
  ngOnChanges(): void {
    if(this.subcategory) {
      this.filteredList = this.products.filter(product => product.id_subcategoria === this.subcategory);
    } else {
      this.resetSearch();
    }
  }
  resetSearch(){
    this.subcategory = null;
    this.filteredList = this.products;
  }
  addToCart() {
    this.productsQuantity++;
    this.cartService.setProductsQuantity(this.productsQuantity);
  }
  
}
