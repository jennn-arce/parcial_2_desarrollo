import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { PaisesService } from './paises.service';

describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaisesService]
    });
  });

  it('should ...', inject([PaisesService], (service: PaisesService) => {
    expect(service).toBeTruthy();
  }));
});