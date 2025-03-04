import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkHistoryComponent } from './talk-history.component';

describe('TalkHistoryComponent', () => {
  let component: TalkHistoryComponent;
  let fixture: ComponentFixture<TalkHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TalkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
