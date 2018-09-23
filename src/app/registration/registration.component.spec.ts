import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationComponent } from './registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LocalService } from '../services/storage/local.service';
import { UserService } from '../services/user/user.service';
import { APP_CONFIG, AppConfig } from '../app.config';
import { RATINGS, GENRES, APP_CONSTANTS } from '../app.constants';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [ RegistrationComponent ],
      providers: [LocalService, UserService,
        {provide: APP_CONFIG, useClass: AppConfig},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
