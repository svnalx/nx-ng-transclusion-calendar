import { Component } from '@angular/core';
import { DayService, CalendarEventsByDay } from '@transclusion/shared';
@Component({
  selector: 'transclusion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dayNames: string[];
  dayNumbers: number[];
  calendarEventsByDay: CalendarEventsByDay;
  currentMonth = 'August';

  constructor(private dayService: DayService) {
    this.dayNames = this.dayService.dayNames();
    this.dayNumbers = this.dayService.dayNumbers();
    this.calendarEventsByDay = this.dayService.calendarEventsByDay();
  }

  toggle(): void {
    //console.log('toggle me');
  }
}
