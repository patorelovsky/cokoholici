import { TestBed } from '@angular/core/testing';

import { PoskytovatelService } from './poskytovatel.service';

describe('PoskytovatelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoskytovatelService = TestBed.get(PoskytovatelService);
    expect(service).toBeTruthy();
  });
});
