import { TestBed, inject } from '@angular/core/testing';

import { StolenVehiclesService } from './stolen-vehicles.service';

describe('StolenVehiclesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StolenVehiclesService]
    });
  });

  it('should be created', inject([StolenVehiclesService], (service: StolenVehiclesService) => {
    expect(service).toBeTruthy();
  }));
});
