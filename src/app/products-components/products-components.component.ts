import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/products/products.service';

@Component({
  selector: 'app-products-components',
  templateUrl: './products-components.component.html',
  styleUrls: ['./products-components.component.css']
})
export class ProductsComponentsComponent implements OnInit {
  public searchValue: string = '';
  public allProducts: any = []
  constructor(private readonly productService: ProductsService) {

  }
  ngOnInit(): void {
    this.getProducts()
  }



  public getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.allProducts = data
      console.log(this.allProducts);
    })
  }

  searchEvent(filterValue: any) {
    this.searchValue = filterValue
  //   this.allProducts = this.allProducts.filter((item: any) => {
  //     return  item.title.includes(this.searchValue)
  //   })
   }
   parseImages(imagesString: string): string[] {
    return JSON.parse(imagesString);
  }

}
