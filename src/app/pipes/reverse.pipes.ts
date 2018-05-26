import { Pipe, PipeTransform } from '@angular/core';
import { Escort } from '../data/escort.data';

@Pipe({
    name: 'reverse',
    pure: false
})
export class ReversePipe implements PipeTransform {
  transform (values: Escort[]): Escort[] {
    if (values) {
      return values.reverse();
    }
  }
}
