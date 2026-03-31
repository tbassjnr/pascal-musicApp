import { TestBed } from '@angular/core/testing';

import { BibleAppService } from './bible-app.service';

describe('BibleAppService', () => {
  let service: BibleAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
