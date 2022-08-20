import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBaseComponent } from './components/calendar-base/calendar-base.component';
import { SharedModule } from '@transclusion/shared';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [CalendarBaseComponent],
  exports: [CalendarBaseComponent],
})
export class CalendarModule {}
