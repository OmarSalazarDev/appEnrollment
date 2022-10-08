import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderPipes'
})
export class GenderPipesPipe implements PipeTransform {

  transform(value: {gender: string}): unknown {
    if (value.gender === 'M') {
      return 'Masculino';
    } else if(value.gender === 'F') {
      return 'Femenino';
    } else {
      return 'Otros';
    }
  }
}
