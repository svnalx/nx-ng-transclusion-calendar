import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DayNumberBoxComponent } from '@transclusion/calendar';

@Component({
  selector: 'calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss'],
})
export class CalendarDayComponent implements OnInit, AfterViewInit, OnChanges {
  // @ViewChild(DayNumberBoxComponent)
  // dayNumberBoxComps!: QueryList<DayNumberBoxComponent>;

  constructor() {
    return;
  }

  ngOnInit(): void {
    return;
  }

  ngAfterViewInit(): void {
    return;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.dayNumberBoxComps.forEach((comp) => {
    //   console.log('heres the component', comp);
    // });
    return;
  }
}
