import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEstadoCalidad'
})
export class FilterEstadoCalidadPipe implements PipeTransform {

  transform(value: any, ...arg: any[]): any {
    const resultadoEstadoC = [];
    for (const post of value){
      if(post.estadoCalidad.toUpperCase().indexof(arg)> -1){
        resultadoEstadoC.push(post)
      }
    }
    return resultadoEstadoC;
  }

}
