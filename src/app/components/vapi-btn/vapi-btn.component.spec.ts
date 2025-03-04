import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapiBtnComponent } from './vapi-btn.component';

describe('VapiBtnComponent', () => {
  let component: VapiBtnComponent;
  let fixture: ComponentFixture<VapiBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VapiBtnComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VapiBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
