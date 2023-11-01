import { TestBed } from '@angular/core/testing';

import { TestsvcService } from './testsvc.service';

describe('TestsvcService', () => {
  let service: TestsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
