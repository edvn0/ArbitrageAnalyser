import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  @Input() searching: boolean;
  search: string;
  products: Product[] = [];

  constructor(private productService: ProductsService) {
    productService
      .getProducts()
      .subscribe((res: Product[]) => {
        this.products = res.map((el: Product) => new Product(el.id, el.name, el.description, el.url));
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.searching = !this.searching;
    const product = this
      .productService.getProduct(this.search)
      .subscribe((res) => {
        console.log(res);
      });
  }

}
