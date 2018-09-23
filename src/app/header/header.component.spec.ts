import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GENRES, RATINGS, APP_CONSTANTS } from '../app.constants';
import { APP_CONFIG, AppConfig } from '../app.config';
import { LocalService } from '../services/storage/local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, StoreModule.forRoot({}),
         HttpClientTestingModule],
      providers: [MovieService, LocalService, Store,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
