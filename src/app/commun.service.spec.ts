import { TestBed, inject } from '@angular/core/testing';

import { CommunService } from './commun.service';
import { HttpModule } from '@angular/http';
describe('CommunService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunService,HttpModule],
      imports: [ HttpModule],
    });
  });

  it('should be created', inject([CommunService], (service: CommunService) => {
    expect(service).toBeTruthy();
  }));
});
