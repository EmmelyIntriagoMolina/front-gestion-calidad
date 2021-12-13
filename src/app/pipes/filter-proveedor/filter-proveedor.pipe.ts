import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProveedor'
})
export class FilterProveedorPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoProveedor = [];
    for (const post of value){
      if(post.proveedor.toLowerCase().indexOf(arg)> -1){
        resultadoProveedor.push(post)
      }
    }
    return resultadoProveedor;
  }

}
