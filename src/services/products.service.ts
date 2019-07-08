import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpclient: HttpClient) {
  }

  getProducts() {
    const products = this.httpclient.get('http://localhost:4201/products/get');
    return products;
  }

  getProduct(id) {
    const product = this.httpclient.get(`http://localhost:4201/products/get/${id}`);
    return product;
  }
}
