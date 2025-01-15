import { TestBed } from '@angular/core/testing';

import { MainProjectsDataService } from './main-projects-data.service';

describe('MainProjectsDataService', () => {
  let service: MainProjectsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainProjectsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
