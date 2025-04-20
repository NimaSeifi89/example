import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice'
})
export class FormatPricePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if (value != null) {
      return new Intl.NumberFormat('fa-IR').format(value);
    }
    return '';
  }

}
