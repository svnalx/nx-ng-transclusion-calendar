import {
  AfterViewInit,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CalendarEventsByDay } from '@transclusion/shared';

@Component({
  selector: 'day-agenda-box',
  templateUrl: './day-agenda-box.component.html',
  styleUrls: ['./day-agenda-box.component.scss'],
})
export class DayAgendaBoxComponent implements AfterViewInit {
  @ViewChild('template1')
  template1!: TemplateRef<HTMLElement>;
  @ViewChild('template2')
  template2!: TemplateRef<HTMLElement>;
  @Input()
  calendarEventsByDay: CalendarEventsByDay = {
    [0]: null,
  };
  @Input()
  dayNumber: number;

  constructor() {
    this.dayNumber = 0;
  }

  ngAfterViewInit() {
    console.log(this.template1.elementRef.nativeElement);
    console.log(this.calendarEventsByDay);
  }

  get template() {
    if (!this.calendarEventsByDay) return this.template1;
    return this.template2;
  }
}
