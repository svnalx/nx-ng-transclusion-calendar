import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBaseComponent } from './components/calendar-base/calendar-base.component';
import { SharedModule } from '@transclusion/shared';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CalendarBaseComponent, CalendarDayComponent],
  exports: [CalendarBaseComponent, CalendarDayComponent],
})
export class CalendarModule {}
