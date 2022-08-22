import { Injectable } from '@angular/core';
import { CalendarEvent } from '@transclusion/calendar';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  dayNames(): string[] {
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

  dayNumbers(): number[] {
    const dayNumbers: number[] = [];

    for (let i = 1; i <= 28; i++) {
      dayNumbers.push(i);
    }

    return dayNumbers;
  }

  calendarEvents(): CalendarEvent[] {
    return [
      { eventName: 'start work', timeDue: '9:00 am' },
      { eventName: 'end work', timeDue: '5:00 pm' },
    ];
  }
}
