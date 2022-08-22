import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'day-agenda-item',
  templateUrl: './day-agenda-item.component.html',
  styleUrls: ['./day-agenda-item.component.scss'],
})
export class DayAgendaItemComponent implements OnInit {
  @Input()
  customTemplate!: TemplateRef<HTMLElement>;

  constructor() {
    return;
  }

  ngOnInit(): void {
    return;
  }
}
