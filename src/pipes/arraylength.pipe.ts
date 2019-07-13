import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/models/product.model';

@Pipe({
  name: 'ArrayLength'
})
export class ArrayLengthPipe implements PipeTransform {

  transform(value: Product[]): any {
    return value.every((el) => el !== null);
  }

}
