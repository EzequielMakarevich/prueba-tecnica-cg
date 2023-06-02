import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/infrastructure/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productsQuantity = 0;
  constructor(private cartService: CartService) { }
  ngOnInit(): void {
    this.cartService.productsQuantity.subscribe(res => this.productsQuantity = res);
  }
}
