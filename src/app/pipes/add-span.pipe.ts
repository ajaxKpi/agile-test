import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'addSpan',
})
export class AddSpanPipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split(' ');
    return words.map(word => this.hasSpan(word) ? word : this.wrapBySpan(word)).join(' ');
  }

  private hasSpan(word: string): boolean {
    return /\<span(.+)?\>\w+\<\/span\>/.test(word);
  }

  private wrapBySpan(word: string): string {
    return `<span>${word}</span>`;
  }
}
