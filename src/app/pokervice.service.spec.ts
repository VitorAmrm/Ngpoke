import { TestBed } from '@angular/core/testing';

import { PokerviceService } from './pokervice.service';

describe('PokerviceService', () => {
  let service: PokerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
