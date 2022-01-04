import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDestino'
})
export class FilterDestinoPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoDestino = [];
    for (const post of value){
      if(post.destino.toLowerCase().indexOf(arg)> -1){
        resultadoDestino.push(post)
      }
    }
    return resultadoDestino;
  }

}
