import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobsList } from './saved-jobs-list';

describe('SavedJobsList', () => {
  let component: SavedJobsList;
  let fixture: ComponentFixture<SavedJobsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedJobsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedJobsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
