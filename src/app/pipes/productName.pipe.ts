import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '../_models';

@Pipe({name: 'storeNamefilter'})
export class StoreNamePipe implements PipeTransform {
transform(productList: Store[], query: string): Store[] {
    if(!query){
        return productList;
    }
    return productList.filter(product=>{
        return product.name.toLocaleLowerCase().match(query.toLocaleLowerCase());
    })
  }
}