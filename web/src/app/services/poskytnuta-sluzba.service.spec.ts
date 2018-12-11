import { TestBed } from '@angular/core/testing';

import { PoskytnutaSluzbaService } from './poskytnuta-sluzba.service';

describe('PoskytnutaSluzbaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoskytnutaSluzbaService = TestBed.get(PoskytnutaSluzbaService);
    expect(service).toBeTruthy();
  });
});
