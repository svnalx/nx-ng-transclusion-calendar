import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBaseComponent } from './components/calendar-base/calendar-base.component';
import { SharedModule } from '@transclusion/shared';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';
import { DayNumberBoxComponent } from './components/day-number-box/day-number-box.component';
import { DayAgendaBoxComponent } from './components/day-agenda-box/day-agenda-box.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    CalendarBaseComponent,
    CalendarDayComponent,
    DayNumberBoxComponent,
    DayAgendaBoxComponent,
  ],
  exports: [
    CalendarBaseComponent,
    CalendarDayComponent,
    DayNumberBoxComponent,
    DayAgendaBoxComponent,
  ],
})
export class CalendarModule {}
