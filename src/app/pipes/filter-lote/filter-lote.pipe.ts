import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLote'
})
export class FilterLotePipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoLote = [];
    for (const post of value){
      if(post.lote.number.indexOf(arg)> -1){
        resultadoLote.push(post)
      }
    }
    return resultadoLote;
  }

}
