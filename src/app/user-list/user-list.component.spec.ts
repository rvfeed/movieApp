import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../user/user.component';
import { MovieService } from '../services/movie.service';
import { LocalService } from '../services/storage/local.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppConfig, APP_CONFIG } from '../app.config';
import { Store, StoreModule } from '@ngrx/store';
import { movieReducer } from '../store/reducer';
import { UserService } from '../services/user/user.service';
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent, UserComponent ],
      providers: [MovieService, UserService, LocalService,  Store,
        {provide: APP_CONFIG, useClass: AppConfig}],
      imports: [FormsModule, HttpClientTestingModule, StoreModule.forRoot({app: movieReducer}), RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
