import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFormComponent } from './rating-form.component';
import {APP_CONFIG, IAppConfig, AppConfig} from "../app.config";
import {APP_CONSTANTS, DefaultValues, RATINGS, GENRES} from "../app.constants";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from '../services/movie.service';
import { LocalService } from '../services/storage/local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
describe('RatingFormComponent', () => {
  let component: RatingFormComponent;
  let fixture: ComponentFixture<RatingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingFormComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [ MovieService, LocalService, Store,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
