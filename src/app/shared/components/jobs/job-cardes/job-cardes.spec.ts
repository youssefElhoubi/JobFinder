import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCardes } from './job-cardes';

describe('JobCardes', () => {
  let component: JobCardes;
  let fixture: ComponentFixture<JobCardes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobCardes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobCardes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
