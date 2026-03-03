import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrateJesus } from './celebrate-jesus';

describe('CelebrateJesus', () => {
  let component: CelebrateJesus;
  let fixture: ComponentFixture<CelebrateJesus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelebrateJesus]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrateJesus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
