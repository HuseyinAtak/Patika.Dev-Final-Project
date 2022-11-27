import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product.model';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(products:Product[],filterText:string):Product[] {
    filterText= filterText.toLowerCase();
  
    return filterText? products.filter((p:Product)=> 
                      p.description?.toLowerCase().indexOf(filterText)!==-1||
                      p.name?.toLowerCase().indexOf(filterText)!==-1||
                      p.category?.toLowerCase().indexOf(filterText)!==-1 ): products;
  }

}
