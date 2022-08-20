import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayNumberBoxComponent } from './day-number-box.component';

describe('DayNumberBoxComponent', () => {
  let component: DayNumberBoxComponent;
  let fixture: ComponentFixture<DayNumberBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DayNumberBoxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DayNumberBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
