import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIN } from './log-in';

describe('LogIN', () => {
  let component: LogIN;
  let fixture: ComponentFixture<LogIN>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogIN]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogIN);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
