import { TestBed } from '@angular/core/testing';

import { AngularReactDatesService } from './angular-react-dates.service';

describe('AngularReactDatesService', () => {
  let service: AngularReactDatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularReactDatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
