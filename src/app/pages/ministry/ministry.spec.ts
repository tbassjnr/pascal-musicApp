import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ministry } from './ministry';

describe('Ministry', () => {
  let component: Ministry;
  let fixture: ComponentFixture<Ministry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ministry]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ministry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
