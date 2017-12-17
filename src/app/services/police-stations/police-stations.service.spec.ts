import { TestBed, inject } from '@angular/core/testing';

import { PoliceStationsService } from './police-stations.service';

describe('PoliceStationsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoliceStationsService]
    });
  });

  it('should be created', inject([PoliceStationsService], (service: PoliceStationsService) => {
    expect(service).toBeTruthy();
  }));
});
