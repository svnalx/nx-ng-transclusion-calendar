import { Component, Input, TemplateRef, AfterViewInit } from '@angular/core';
import { CalendarEvent } from '@transclusion/shared';

@Component({
  selector: 'day-agenda-item',
  templateUrl: './day-agenda-item.component.html',
  styleUrls: ['./day-agenda-item.component.scss'],
})
export class DayAgendaItemComponent implements AfterViewInit {
  @Input()
  templateName!: TemplateRef<HTMLElement>;
  @Input()
  calendarEvent: CalendarEvent | null = {
    eventName: null,
    timeDue: null,
  };

  ngAfterViewInit(): void {
    //console.log('the calendar event is: ', this.calendarEvent);
    return;
  }
}
