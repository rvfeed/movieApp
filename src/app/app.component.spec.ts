import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LocalService } from './services/storage/local.service';
import { Store, StoreModule } from '@ngrx/store';
import { MovieService } from './services/movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {APP_CONFIG, AppConfig} from "./app.config";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent
      ],
      imports: [RouterTestingModule,HttpClientTestingModule, StoreModule.forRoot({}), ReactiveFormsModule],
      providers: [LocalService, MovieService, Store,
         {provide: APP_CONFIG, useClass: AppConfig},]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Movie App');
  }));
 
});
