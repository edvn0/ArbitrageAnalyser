import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = `localhost:4201/products`;

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

  /**
   * Returns the product searched for via name or ID.
   * @param id Name of phone alternatively the ID of the phone.
   */
  getProduct(id: string) {
    return this.httpclient.get(`http://localhost:4201/products/get/${id}`);
  }

  getProductByName(name: string) {
    return this.httpclient.get(baseUrl + `/get/name/${name}`);
  }
}
