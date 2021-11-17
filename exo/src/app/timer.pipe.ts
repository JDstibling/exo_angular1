import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): String {
    const minutes: number = Math.floor(value / 60);
    return minutes + 'min ' + (value - minutes * 60) + 's';
  }

}
