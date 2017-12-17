import { TestBed, inject } from '@angular/core/testing';

import { MissingPersonsService } from './missing-persons.service';

describe('MissingPersonsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MissingPersonsService]
    });
  });

  it('should be created', inject([MissingPersonsService], (service: MissingPersonsService) => {
    expect(service).toBeTruthy();
  }));
});
