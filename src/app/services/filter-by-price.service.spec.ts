import { TestBed } from '@angular/core/testing';

import { FilterByPriceService } from './filter-by-price.service';

describe('FilterByPriceService', () => {
  let service: FilterByPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
