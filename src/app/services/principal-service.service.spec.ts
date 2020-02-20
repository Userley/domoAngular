import { TestBed } from '@angular/core/testing';

import { PrincipalServiceService } from './principal-service.service';

describe('PrincipalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrincipalServiceService = TestBed.get(PrincipalServiceService);
    expect(service).toBeTruthy();
  });
});
