import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { AppRatingFormModule } from '../rating-form/rating-form.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiCheckDirective } from '../directives/multi-check.directive';
import { MovieService } from '../services/movie.service';

describe('DashboardComponent1', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, MultiCheckDirective ],
      providers: [MovieService],
      imports: [AppRatingFormModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
