import { TestBed } from '@angular/core/testing';

import { QeuServicesService } from './qeu-services.service';

describe('QeuServicesService', () => {
  let service: QeuServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QeuServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
