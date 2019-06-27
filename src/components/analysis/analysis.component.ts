import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/models/product.model';


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
  products: Product[];

  constructor() { this.products = devProducts; }

  ngOnInit() {
  }

  onSubmit() {

  }

}
