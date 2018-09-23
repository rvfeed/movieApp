import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingComponent } from './rating.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LocalService } from '../services/storage/local.service';
import { MovieService } from '../services/movie.service';
import { RouterTestingModule } from '@angular/router/testing';
import { GENRES, RATINGS, APP_CONSTANTS } from '../app.constants';
import { APP_CONFIG, AppConfig } from '../app.config';
import { StoreModule, Store } from '@ngrx/store';
describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingComponent ],
      imports: [FormsModule, RouterTestingModule, StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [LocalService, MovieService, Store,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
