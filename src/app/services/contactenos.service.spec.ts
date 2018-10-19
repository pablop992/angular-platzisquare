import { TestBed, inject } from '@angular/core/testing';

import { ContactenosService } from './contactenos.service';

describe('ContactenosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactenosService]
    });
  });

  it('should be created', inject([ContactenosService], (service: ContactenosService) => {
    expect(service).toBeTruthy();
  }));
});
