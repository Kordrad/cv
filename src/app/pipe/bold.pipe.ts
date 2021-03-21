import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bold'
})
export class BoldPipe implements PipeTransform {
  transform(value: string, start: number = 1): string {
    if (value === '') {
      return '';
    }
    let text = '';
    let bold = '';
    const val = value.trim().split(' ');

    val.map((word: string, id: number) =>
      id >= start ? (bold += ` ${word}`) : (text += ` ${word}`)
    );

    return `${text.trim()} <b>${bold.trim()}</b>`;
  }
}
