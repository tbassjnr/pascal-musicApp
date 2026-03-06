import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRider } from './tech-rider';

describe('TechRider', () => {
  let component: TechRider;
  let fixture: ComponentFixture<TechRider>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechRider]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechRider);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
