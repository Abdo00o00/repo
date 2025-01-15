import { TestBed } from '@angular/core/testing';

import { GallerydataService } from './gallerydata.service';

describe('GallerydataService', () => {
  let service: GallerydataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GallerydataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
