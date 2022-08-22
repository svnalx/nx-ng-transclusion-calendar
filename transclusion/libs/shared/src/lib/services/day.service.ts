import { Injectable } from '@angular/core';

export interface CalendarEvent {
  eventName: string | null;
  timeDue: string | null;
}

export interface CalendarEventsByDay {
  [day: number]: CalendarEvent[] | null;
}

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

  calendarEventsByDay(): CalendarEventsByDay {
    return {
      1: [
        { eventName: 'start work', timeDue: '9:00 am' },
        { eventName: 'end work', timeDue: '5:00 pm' },
      ],
      2: [
        { eventName: 'start work', timeDue: '9:00 am' },
        { eventName: 'end work', timeDue: '5:00 pm' },
      ],
      3: [
        { eventName: 'start work', timeDue: '9:00 am' },
        { eventName: 'end work', timeDue: '5:00 pm' },
      ],
      4: [
        { eventName: 'start work', timeDue: '9:00 am' },
        { eventName: 'end work', timeDue: '5:00 pm' },
      ],
      5: [
        { eventName: 'start work', timeDue: '9:00 am' },
        { eventName: 'end work', timeDue: '5:00 pm' },
      ],
      6: [{ eventName: 'mow yard', timeDue: '10:00 am' }],
      7: [{ eventName: 'grocery', timeDue: '3:00 pm' }],
    };
  }
}
