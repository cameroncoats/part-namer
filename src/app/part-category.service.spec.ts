import { TestBed } from '@angular/core/testing';

import { PartCategoryService } from './part-category.service';

describe('PartCategoryService', () => {
  let service: PartCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
