import { TestBed } from '@angular/core/testing';

import { CallToApiService } from './call-to-api.service';

describe('CallToApiService', () => {
  let service: CallToApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallToApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
