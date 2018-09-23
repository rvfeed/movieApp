import { TestBed, inject } from '@angular/core/testing';

import { MovieInterceptor } from './movie-interceptor.service';
import { LocalService } from '../services/storage/local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

describe('MovieInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({})],
      providers: [MovieInterceptor, Store, LocalService]
    });
  });

  it('should be created', inject([MovieInterceptor], (service: MovieInterceptor) => {
    expect(service).toBeTruthy();
  }));
});
