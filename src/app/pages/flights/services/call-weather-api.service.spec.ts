import { TestBed } from '@angular/core/testing';

import { CallWeatherApiService } from './call-weather-api.service';

describe('CallWeatherApiService', () => {
  let service: CallWeatherApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallWeatherApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
