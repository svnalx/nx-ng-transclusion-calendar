import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '@transclusion/calendar';
import { DayService } from '@transclusion/shared';
@Component({
  selector: 'transclusion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dayNames: string[];
  dayNumbers: number[];
  calendarEvents: CalendarEvent[];

  constructor(private dayService: DayService) {
    this.dayNames = this.dayService.dayNames();
    this.dayNumbers = this.dayService.dayNumbers();
    this.calendarEvents = this.dayService.calendarEvents();
  }

  ngOnInit(): void {
    return;
  }

  toggle1(): void {
    console.log('toggle 1');
  }
}
