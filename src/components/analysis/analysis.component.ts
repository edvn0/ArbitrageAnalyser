import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductsService } from 'src/services/products.service';


const devProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone',
    description: 'The best one!',
    url: 'apple.com/iphone'
  },
  {
    id: 2,
    name: 'Samsung Galaxy 10',
    description: 'Ugly piece of shit.',
    url: 'reddit.com/r/samsungmasterrace'
  }
];

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit {

  @Input() searching: boolean;
  products: any = [];

  constructor(private productService: ProductsService) {
    productService
      .getProducts()
      .forEach((res) => {
        this.products = res;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.searching = true;
  }

}
