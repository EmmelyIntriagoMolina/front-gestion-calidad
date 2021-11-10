import { TestBed } from '@angular/core/testing';

import { OrdenClienteService } from './orden-cliente.service';

describe('OrdenClienteService', () => {
  let service: OrdenClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
