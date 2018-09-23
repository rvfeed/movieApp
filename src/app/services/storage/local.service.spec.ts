import { TestBed, inject } from '@angular/core/testing';

import { LocalService } from './local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('LocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalService],
      imports: [RouterTestingModule, StoreModule.forRoot({})]
    });
  });

  it('should be created', inject([LocalService], (service: LocalService) => {
    expect(service).toBeTruthy();
  }));
});
