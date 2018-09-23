import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingListComponent } from './rating-list.component';
import {APP_CONFIG, IAppConfig, AppConfig} from "../app.config";
import {APP_CONSTANTS, DefaultValues, RATINGS, GENRES} from "../app.constants";
import { LocalService } from '../services/storage/local.service';
import { MovieService } from '../services/movie.service';
import { Store, StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';
import { Observable } from 'rxjs/Observable';
import { movieReducer } from '../store/reducer';
describe('RatingListComponent', () => {
  let component: RatingListComponent;
  let fixture: ComponentFixture<RatingListComponent>;
let store: Store<any>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingListComponent, RatingComponent ],
      imports: [RouterTestingModule, FormsModule, 
         StoreModule.forRoot({app: movieReducer}), HttpClientTestingModule],
      providers: [ LocalService, MovieService, Store,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingListComponent);
    component = fixture.componentInstance;
    component.getMovies()
    fixture.detectChanges();
store = TestBed.get(Store)
  });

  it('should create', () => {
 
    expect(component).toBeTruthy();
  });
});
