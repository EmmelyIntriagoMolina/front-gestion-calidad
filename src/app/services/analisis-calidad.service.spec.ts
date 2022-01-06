import { TestBed } from '@angular/core/testing';

import { AnalisisCalidadService } from './analisis-calidad.service';

describe('AnalisisCalidadService', () => {
  let service: AnalisisCalidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalisisCalidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
