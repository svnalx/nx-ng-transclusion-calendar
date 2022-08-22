import {
  AfterViewInit,
  Component,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';

export interface CalendarEvent {
  eventName: string | null;
  timeDue: string | null;
}
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
  calendarEvents: CalendarEvent[] = [];

  ngAfterViewInit() {
    console.log(this.template1.elementRef.nativeElement);
    console.log(this.calendarEvents);
  }

  get template() {
    if (!this.calendarEvents) return this.template1;
    return this.template2;
  }
}
