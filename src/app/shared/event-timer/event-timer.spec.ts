import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTimer } from './event-timer';

describe('EventTimer', () => {
  let component: EventTimer;
  let fixture: ComponentFixture<EventTimer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTimer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventTimer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
