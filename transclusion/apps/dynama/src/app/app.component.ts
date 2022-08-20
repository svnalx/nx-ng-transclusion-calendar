import { Component, OnInit } from '@angular/core';
import { DayService } from '@transclusion/shared';
@Component({
  selector: 'transclusion-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dynama';
  dayNames: string[];
  dayNumbers: number[];

  constructor(private dayService: DayService) {
    this.dayNames = this.dayService.getDayNames();
    this.dayNumbers = this.dayService.getDayNumbers();
  }

  ngOnInit(): void {
    return;
  }
}
