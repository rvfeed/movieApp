import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalService } from '../services/storage/local.service';
import { UserService } from '../services/user/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GENRES, RATINGS, APP_CONSTANTS } from '../app.constants';
import { APP_CONFIG, AppConfig } from '../app.config';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule, StoreModule.forRoot({}), ReactiveFormsModule],
      providers: [LocalService, Store, UserService,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
