import { TestBed, inject } from '@angular/core/testing';

import { EscortService } from './escort.service';

describe('EscortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EscortService]
    });
  });

  it('should be created', inject([EscortService], (service: EscortService) => {
    expect(service).toBeTruthy();
  }));
});
