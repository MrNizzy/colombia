import { TestBed } from '@angular/core/testing';

import { PoliticalConstitutionService } from './political-constitution.service';

describe('PoliticalConstitutionService', () => {
  let service: PoliticalConstitutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticalConstitutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
