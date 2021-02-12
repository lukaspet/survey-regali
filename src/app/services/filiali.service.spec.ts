import { TestBed } from '@angular/core/testing';

import { FilialiService } from './filiali.service';

describe('FilialiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilialiService = TestBed.get(FilialiService);
    expect(service).toBeTruthy();
  });
});
