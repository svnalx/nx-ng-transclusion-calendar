import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  constructor() {
    return;
  }

  getDayNames(): string[] {
    return [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
  }

  getDayNumbers(): number[] {
    const dayNumbers: number[] = [];

    for (let i = 1; i <= 28; i++) {
      dayNumbers.push(i);
    }

    return dayNumbers;
  }
}
