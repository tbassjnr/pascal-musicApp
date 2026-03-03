import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingoutExperience } from './singout-experience';

describe('SingoutExperience', () => {
  let component: SingoutExperience;
  let fixture: ComponentFixture<SingoutExperience>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingoutExperience]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingoutExperience);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
