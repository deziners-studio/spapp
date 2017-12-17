import { TestBed, inject } from '@angular/core/testing';

import { FirsService } from './firs.service';

describe('FirsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirsService]
    });
  });

  it('should be created', inject([FirsService], (service: FirsService) => {
    expect(service).toBeTruthy();
  }));
});
