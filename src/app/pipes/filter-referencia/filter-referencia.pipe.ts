import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReferencia'
})
export class FilterReferenciaPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoReferencia = [];
    for (const post of value){
      if(post.referencia.toUpperCase().indexof(arg)> -1){
        resultadoReferencia.push(post)
      }
    }
    return resultadoReferencia;
  }

}
