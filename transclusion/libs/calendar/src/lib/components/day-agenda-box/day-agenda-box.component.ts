import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'day-agenda-box',
  templateUrl: './day-agenda-box.component.html',
  styleUrls: ['./day-agenda-box.component.scss'],
})
export class DayAgendaBoxComponent implements OnInit, AfterViewInit {
  @ViewChild('template1')
  myTemplate!: TemplateRef<HTMLElement>;

  constructor() {
    return;
  }

  ngOnInit(): void {
    return;
  }

  ngAfterViewInit() {
    console.log(this.myTemplate);
  }
}
