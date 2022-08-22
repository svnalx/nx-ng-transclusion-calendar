import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'day-name-box',
  templateUrl: './day-name-box.component.html',
  styleUrls: ['./day-name-box.component.scss'],
})
export class DayNameBoxComponent implements OnInit {
  @Input()
  dayNames: string[];
  @Input()
  dayNumber: number;

  constructor() {
    this.dayNames = [];
    this.dayNumber = 0;
  }

  ngOnInit(): void {
    console.log('modulus', this.dayNames[(this.dayNumber % 7) - 1]);
  }
}
