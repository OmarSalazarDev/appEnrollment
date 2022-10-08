import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullnamePipes'
})
export class FullnamePipesPipe implements PipeTransform {

  transform(value: {name: string, lastname: string}): unknown {
    let resultado: string = '';

    resultado = value.name + "  " + value.lastname;
    return resultado;
  }

}
