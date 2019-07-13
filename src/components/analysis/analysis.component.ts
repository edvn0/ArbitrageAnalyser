import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, OnChanges {

  @Input() searching: boolean;
  search: string;

  searchedForProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductsService) {
    productService
      .getProducts()
      .subscribe((res: Product[]) => {
        console.log(res);
        this.products = res.map((el: Product) => new Product(el._id, el.name, el.description, el.url));
      });
  }

  ngOnInit() {
    this.searchedForProducts = [];
  }

  ngOnChanges() {
    this.searchedForProducts = [];

  }

  onSubmit() {
    this.searching = !this.searching;
    this.productService.getProduct(this.search)
      .subscribe((res) => {
        this.searchedForProducts.push(res as Product);
        this.searching = !this.searching;
      });
  }

}
