import { Component, OnInit } from '@angular/core';
import { DayService, CalendarEventsByDay } from '@transclusion/shared';
@Component({
  selector: 'transclusion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dayNames: string[];
  dayNumbers: number[];
  calendarEventsByDay: CalendarEventsByDay;

  constructor(private dayService: DayService) {
    this.dayNames = this.dayService.dayNames();
    this.dayNumbers = this.dayService.dayNumbers();
    this.calendarEventsByDay = this.dayService.calendarEventsByDay();
  }

  ngOnInit(): void {
    return;
  }

  toggle1(): void {
    console.log('toggle 1');
  }
}
