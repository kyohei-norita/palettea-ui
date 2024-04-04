import { TestBed } from '@angular/core/testing';

import { PaLibService } from './pa-lib.service';

describe('PaLibService', () => {
  let service: PaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
