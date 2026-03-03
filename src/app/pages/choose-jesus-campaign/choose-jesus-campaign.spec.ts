import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseJesusCampaign } from './choose-jesus-campaign';

describe('ChooseJesusCampaign', () => {
  let component: ChooseJesusCampaign;
  let fixture: ComponentFixture<ChooseJesusCampaign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseJesusCampaign]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseJesusCampaign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
