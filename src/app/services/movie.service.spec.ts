import { TestBed, inject } from '@angular/core/testing';
import { MovieService } from './movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalService } from './storage/local.service';
import { RouterModule } from '@angular/router';
import { APP_CONSTANTS, RATINGS, GENRES } from '../app.constants';
import { APP_CONFIG, AppConfig } from '../app.config';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

describe('MovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService, LocalService,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}],
      imports: [HttpClientTestingModule, RouterTestingModule, StoreModule.forRoot({})]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
