import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5Component } from './top5.component';
import { LocalService } from '../services/storage/local.service';
import { RatingListComponent } from '../rating-list/rating-list.component';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule, Store } from '@ngrx/store';
import { MovieService } from '../services/movie.service';
import { GENRES, RATINGS, APP_CONSTANTS } from '../app.constants';
import { AppConfig, APP_CONFIG } from '../app.config';
import { movieReducer } from '../store/reducer';

describe('Top5Component', () => {
  let component: Top5Component;
  let fixture: ComponentFixture<Top5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5Component, RatingListComponent, RatingComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule,
         StoreModule.forRoot({app: movieReducer})],
      providers: [LocalService, Store, MovieService,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
