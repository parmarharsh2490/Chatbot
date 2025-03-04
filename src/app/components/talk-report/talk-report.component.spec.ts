import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkReportComponent } from './talk-report.component';

describe('TalkReportComponent', () => {
  let component: TalkReportComponent;
  let fixture: ComponentFixture<TalkReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkReportComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TalkReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
