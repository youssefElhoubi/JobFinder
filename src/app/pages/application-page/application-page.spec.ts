import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationPage } from './application-page';

describe('ApplicationPage', () => {
  let component: ApplicationPage;
  let fixture: ComponentFixture<ApplicationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
