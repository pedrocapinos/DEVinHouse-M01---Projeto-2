import { Pipe, PipeTransform } from '@angular/core';
import { Collection } from '../interfaces/collection';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(lista:any , criterio?: string):any {
    if (criterio?.length) {
      lista.criterio.sort((a: any, b: any) => {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
      return lista;
    }
    return lista;
  }

}
