import { TestBed } from '@angular/core/testing';

import { FetchImageServiceService } from './fetch-image-service.service';

describe('FetchImageServiceService', () => {
  let service: FetchImageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchImageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
