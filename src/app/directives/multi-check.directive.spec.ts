import { MultiCheckDirective } from './multi-check.directive';
import { MovieService } from '../services/movie.service'
import { ElementRef } from '@angular/core';
import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_CONSTANTS, RATINGS, GENRES } from '../app.constants';
import { AppConfig, APP_CONFIG } from '../app.config';
import { LocalService } from '../services/storage/local.service';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule, Store } from '@ngrx/store';
class MockElementRef implements ElementRef {
  nativeElement = {};
}
describe('Multi checkbox Directive', () => {
  let component: MultiCheckDirective;
  let fixture: ComponentFixture<MultiCheckDirective>;
  let e : ElementRef;
  let m : MovieService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCheckDirective ],
      imports: [RouterTestingModule, StoreModule.forRoot({}), HttpClientTestingModule],
      providers: [LocalService, Store,
        { provide: ElementRef, useValue: new MockElementRef()},
        {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}},
        {provide: APP_CONFIG, useClass: AppConfig}, MovieService]
    })
    .compileComponents();
  e = TestBed.get(ElementRef)
  m = TestBed.get(MovieService)
  }));
  it('should create an instance', () => {
    
    expect(new MultiCheckDirective(e, m)).toBeTruthy();
  });
});
