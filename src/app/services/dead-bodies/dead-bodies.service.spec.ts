import { TestBed, inject } from '@angular/core/testing';

import { DeadBodiesService } from './dead-bodies.service';

describe('DeadBodiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeadBodiesService]
    });
  });

  it('should be created', inject([DeadBodiesService], (service: DeadBodiesService) => {
    expect(service).toBeTruthy();
  }));
});
