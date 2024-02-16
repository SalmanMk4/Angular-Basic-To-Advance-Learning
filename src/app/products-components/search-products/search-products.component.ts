import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {

  public searchValue: string = '';
  @Output() searchEvent = new EventEmitter<string>();


  filterValue(){
    this.searchEvent.emit(this.searchValue)
  }

}
