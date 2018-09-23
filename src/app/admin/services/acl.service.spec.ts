import { TestBed, inject } from '@angular/core/testing';

import { AclService } from './acl.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AclService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [AclService]
    });
  });

  it('should be created', inject([AclService], (service: AclService) => {
    expect(service).toBeTruthy();
  }));
});
