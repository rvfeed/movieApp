import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TabsComponent} from '../tabs/tabs.component';
import {RatingListComponent } from '../rating-list/rating-list.component'
import { BlogComponent } from './blog.component';
import { TabComponent } from '../tab/tab.component';
import { RatingFormComponent } from '../rating-form/rating-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from '../rating/rating.component';
import { MovieService } from '../services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_CONFIG, AppConfig } from '../app.config';
import { LocalService } from '../services/storage/local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { APP_CONSTANTS, RATINGS, GENRES} from '../app.constants'
describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [MovieService, LocalService, 
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}},
        {provide: APP_CONFIG, useClass: AppConfig}],
      imports: [FormsModule, StoreModule.forRoot({}), RouterTestingModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [ BlogComponent,
         TabsComponent,
          RatingListComponent, 
          TabComponent,
           RatingFormComponent,
          RatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
