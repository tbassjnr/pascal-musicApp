import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bible } from './bible';

describe('Bible', () => {
  let component: Bible;
  let fixture: ComponentFixture<Bible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bible);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
