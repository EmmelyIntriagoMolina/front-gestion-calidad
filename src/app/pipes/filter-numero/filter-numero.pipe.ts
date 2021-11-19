import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNumero'
})
export class FilterNumeroPipe implements PipeTransform {
  
  transform(value: any, ...arg: any[]): any {
    let numero = 0,
    toString = numero.toString(),
    toConcat = numero + "";
    const resultadoNumero = [];
    for (const post of value){
      if(post.numero.toUpperCase.indexof(arg)> -1){
        resultadoNumero.push(post)
      }
    }
    return resultadoNumero;
  }
}

