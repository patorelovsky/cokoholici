import { TestBed } from '@angular/core/testing';

import { ClenService } from './clen.service';

describe('ClenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClenService = TestBed.get(ClenService);
    expect(service).toBeTruthy();
  });
});
