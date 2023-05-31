import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ISubcategories } from 'src/app/infrastructure/entities/subcategories.interface';
import { SubcategoriesService } from 'src/app/infrastructure/services/subcategories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  subcategories: ISubcategories[] = []
  @Output() subcategory = new EventEmitter<number | null>();
  constructor(private subcategoriesService: SubcategoriesService) { }
  ngOnInit(): void {
    this.subcategoriesService.getSubcategoriesData().subscribe(res => this.subcategories = res);
  }
  subcategoryEmitter(id: number){
    this.subcategory.emit(id);
  }
}
