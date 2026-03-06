import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighResPhotos } from './high-res-photos';

describe('HighResPhotos', () => {
  let component: HighResPhotos;
  let fixture: ComponentFixture<HighResPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighResPhotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighResPhotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
