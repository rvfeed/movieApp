import { TestBed, inject } from '@angular/core/testing';

import { LoggedInGuard } from './logged.service';
import { LocalService } from '../storage/local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';

describe('LoggedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedInGuard, LocalService, Store],
      imports:[ RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot({})]
    });
  });

  it('should be created', inject([LoggedInGuard], (service: LoggedInGuard) => {
    expect(service).toBeTruthy();
  }));
});
