import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobsCard } from './saved-jobs-card';

describe('SavedJobsCard', () => {
  let component: SavedJobsCard;
  let fixture: ComponentFixture<SavedJobsCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedJobsCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedJobsCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
