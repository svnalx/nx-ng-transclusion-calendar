import {
  OnInit,
  AfterViewInit,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CalendarEvent, CalendarEventsByDay } from '@transclusion/shared';

@Component({
  selector: 'day-agenda-box',
  templateUrl: './day-agenda-box.component.html',
  styleUrls: ['./day-agenda-box.component.scss'],
})
export class DayAgendaBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('template1')
  template1!: TemplateRef<HTMLElement>;
  @ViewChild('template2')
  template2!: TemplateRef<HTMLElement>;
  @Input()
  calendarEventsByDay: CalendarEventsByDay;
  @Input()
  dayNumber: number;
  todaysEvents: CalendarEvent[] | null;

  constructor() {
    this.calendarEventsByDay = {};
    this.dayNumber = 0;
    this.todaysEvents = null;
  }

  ngOnInit(): void {
    this.todaysEvents = this.calendarEventsByDay[this.dayNumber];
    console.log('todays events', this.todaysEvents);
  }

  ngAfterViewInit() {
    //console.log(this.template1.elementRef.nativeElement);
    //console.log(this.calendarEventsByDay);
    return;
  }

  get template() {
    if (typeof this.todaysEvents === undefined) return this.template1;
    return this.template2;
  }
}
