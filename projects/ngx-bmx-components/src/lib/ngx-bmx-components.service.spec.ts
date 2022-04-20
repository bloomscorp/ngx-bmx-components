import {TestBed} from '@angular/core/testing';

import {NgxBmxComponentsService} from './ngx-bmx-components.service';

describe('NgxBmxComponentsService', () => {
  let service: NgxBmxComponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBmxComponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
