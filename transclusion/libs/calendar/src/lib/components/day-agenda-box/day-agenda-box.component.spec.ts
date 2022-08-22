import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayAgendaBoxComponent } from './day-agenda-box.component';

describe('DayAgendaBoxComponent', () => {
  let component: DayAgendaBoxComponent;
  let fixture: ComponentFixture<DayAgendaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayAgendaBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DayAgendaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
