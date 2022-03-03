import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrice'
})
export class PipePricePipe implements PipeTransform {

  transform(value: number|undefined): string {
    return value + "€";
  }

}
