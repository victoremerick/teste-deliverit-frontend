import { TestBed } from '@angular/core/testing';

import { RegraCobrancaService } from './regra-cobranca.service';

describe('RegraCobrancaService', () => {
  let service: RegraCobrancaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegraCobrancaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
