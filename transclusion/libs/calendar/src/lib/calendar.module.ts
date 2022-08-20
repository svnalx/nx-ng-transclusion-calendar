import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBaseComponent } from './components/calendar-base/calendar-base.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CalendarBaseComponent],
  exports: [CalendarBaseComponent],
})
export class CalendarModule {}
