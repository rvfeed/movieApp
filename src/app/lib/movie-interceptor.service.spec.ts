import { TestBed, inject } from '@angular/core/testing';

import { MovieInterceptorService } from './movie-interceptor.service';

describe('MovieInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieInterceptorService]
    });
  });

  it('should be created', inject([MovieInterceptorService], (service: MovieInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
