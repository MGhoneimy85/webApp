import { TestBed, inject } from '@angular/core/testing';

import { CommunService } from './commun.service';

describe('CommunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunService]
    });
  });

  it('should be created', inject([CommunService], (service: CommunService) => {
    expect(service).toBeTruthy();
  }));
});
