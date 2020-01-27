import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: string[] | number[] | string, separator: string = ',', splitter?: string): any {
    if (value === '') {
      return '';
    }

    if (typeof value === 'string') {
      value.split(splitter);
    }

    if (Array.isArray(value)) {
      value = value.join(separator);
    }
    return value;
  }

}
