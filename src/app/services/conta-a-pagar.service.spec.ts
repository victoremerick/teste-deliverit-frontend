import { TestBed } from '@angular/core/testing';

import { ContaAPagarService } from './conta-a-pagar.service';

describe('ContaAPagarService', () => {
  let service: ContaAPagarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaAPagarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
