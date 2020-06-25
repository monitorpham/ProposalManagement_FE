import { TestBed } from '@angular/core/testing';

import { SCommonService } from './s-common.service';

describe('SCommonService', () => {
  let service: SCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
