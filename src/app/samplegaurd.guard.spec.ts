import { TestBed } from '@angular/core/testing';

import { SamplegaurdGuard } from './samplegaurd.guard';

describe('SamplegaurdGuard', () => {
  let guard: SamplegaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SamplegaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
