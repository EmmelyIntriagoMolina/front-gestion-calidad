import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCliente'
})
export class FilterClientePipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoCliente = [];
    for (const post of value){
      if(post.cliente.toUpperCase().indexof(arg)> -1){
        resultadoCliente.push(post)
      }
    }
    return resultadoCliente;
  }
}
