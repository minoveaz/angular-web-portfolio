import { TestBed } from '@angular/core/testing';

import { InfoPaginaService } from './info-pagina.service';

describe('InfoPaginaService', () => {
  let service: InfoPaginaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPaginaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
