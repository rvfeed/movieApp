import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MovieService } from '../services/movie.service';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from '../store/reducer';
import { AppConfig, APP_CONFIG } from '../app.config';
import { LocalService } from '../services/storage/local.service';
import { UserService } from '../services/user/user.service';
import { APP_CONSTANTS, RATINGS, GENRES } from '../app.constants';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule, 
        StoreModule.forRoot({app: movieReducer})],
      providers: [MovieService, LocalService, UserService,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS,  useValue: {RATINGS, GENRES}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
