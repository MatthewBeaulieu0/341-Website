import { TestBed } from '@angular/core/testing';

import { GlobalUserService } from './global-user.service';

describe('GlobalUserService', () => {
  let service: GlobalUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
