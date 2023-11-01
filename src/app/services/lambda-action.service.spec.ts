import { TestBed } from '@angular/core/testing';

import { LambdaActionService } from './lambda-action.service';

describe('LambdaActionService', () => {
  let service: LambdaActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LambdaActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
