import { TestBed } from '@angular/core/testing';

import { FetchUserServiceService } from './fetch-user-service.service';

describe('FetchUserServiceService', () => {
  let service: FetchUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
