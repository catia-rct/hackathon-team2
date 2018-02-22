import {Injectable} from '@angular/core';

@Injectable()
export class CalculationService {

  /**
   * Convets minutes to time format
   * @param {number} minutes
   * @returns {string}
   */
  public generateTimeFormatByMinutes(minutes: number): string {
    let minutesString: string;

    if (minutes < 60) {
      if (minutes < 10) {
        minutesString = '0' + minutes;
      }
      return '00:' + minutesString;
    }

    let hours: any = Math.floor(minutes / 60);
    minutes = minutes % 60;

    if (minutes < 10) {
      minutesString = '0' + minutes;
    }

    if (hours < 10) {
      hours = '0' + hours;
      return hours + ':' + minutesString;
    } else if (hours > 23) {
      const days: any = Math.floor(hours / 24) + 'days ';
      hours = hours % 24;

      return days + hours + ':' + minutesString;
    } else {
      return hours + ':' + minutesString;
    }
  }

}
