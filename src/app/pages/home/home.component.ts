import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
 @Input() subcategory!: number | null;
  getSubcategoryId(event: number | null){
    this.subcategory = event;
  }

}
