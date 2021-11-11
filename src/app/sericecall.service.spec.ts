import { TestBed } from '@angular/core/testing';

import { SericecallService } from './sericecall.service';

describe('SericecallService', () => {
  let service: SericecallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SericecallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
