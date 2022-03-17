import { TestBed } from '@angular/core/testing';

import { FeaturedItemsService } from './featured-items.service';

describe('FeaturedItemsService', () => {
  let service: FeaturedItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
