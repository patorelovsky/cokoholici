import { TestBed } from '@angular/core/testing';

import { SluzbaService } from './sluzba.service';

describe('SluzbaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SluzbaService = TestBed.get(SluzbaService);
    expect(service).toBeTruthy();
  });
});
