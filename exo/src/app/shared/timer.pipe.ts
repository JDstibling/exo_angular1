import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  transform(value: number): String {
    // secondes en minutes 
    const minutes: number = Math.floor(value /60);
    // minutes en heures
    const heures: number = Math.floor(minutes/60);
    return heures + 'h ' + (minutes - (heures * 60)) + 'min ' + (value - minutes * 60) + 's';
  }

}
