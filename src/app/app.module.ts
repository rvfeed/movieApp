import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StoreModule, ActionReducer, combineReducers } from "@ngrx/store"
import { EffectsModule} from "@ngrx/effects"
import { RouterModule, Router, Routes, CanActivate}  from "@angular/router"
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RequestOptions } from '@angular/http'
import { ReactiveFormsModule,  FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { UserComponent } from './user/user.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import {MovieService } from "./services/movie.service";
import {APP_CONFIG, AppConfig} from "./app.config";
import { RatingListComponent } from './rating-list/rating-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_CONSTANTS, RATINGS, GENRES} from './app.constants';
import { Top5Component } from './top5/top5.component';
import { MoviesComponent } from './movies/movies.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { AppDashBoardModule } from './dashboard/app.dashboard.module';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from "./services/user/user.service";
import { LocalService } from './services/storage/local.service';
import { LoggedInGuard } from './services/guards/logged.service';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { AppRatingFormModule} from './rating-form/rating-form.module';
import { DynamicTabsDirective } from './dynamic-tabs.directive';
import { ClickStopPropagation } from './click-stop-propagation.directive';
import { AuthRequestOptions } from './lib/auth-request-options';
import { MovieInterceptor} from "./lib/movie-interceptor.service";
import { MultiCheckDirective } from './directives/multi-check.directive';
import {AuthResolver} from "./services/resolve/resolve.class";
import { movieReducer } from './store/reducer';
import { MovieEffects} from './store/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { FileuploadComponent } from './fileupload/fileupload.component';
let routes: Routes = [
  { path: '', redirectTo:'dashboard', pathMatch:'full'},
  {path: 'top5', component: Top5Component, canActivate: [LoggedInGuard] },
  {path: 'movies', component: RatingListComponent, canActivate: [LoggedInGuard]},
  {path: 'movies/:searchText', component: RatingListComponent, canActivate: [LoggedInGuard]},  
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'users', component: UserListComponent, resolve:{loggedIn: AuthResolver}},
   { path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },
  {path: '**', component: FileNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,    
    RatingListComponent,
    HeaderComponent,
    Top5Component,
    MoviesComponent,
    BlogComponent,
    LoginComponent,
    LogoutComponent,
    FileNotFoundComponent,
    RegistrationComponent,
    FormElementsComponent,
    TabsComponent,
    TabComponent,
    DynamicTabsDirective,
    ClickStopPropagation,
    MultiCheckDirective,
    UserComponent,
    UserListComponent,
    FileuploadComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
     StoreModule.forRoot(<any>{app: movieReducer, router: routerReducer}), 
    RouterModule.forRoot(routes, {useHash: true}),   
    AppRatingFormModule,
    AppDashBoardModule,
     StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([ MovieEffects ])
   
  ],
  providers: [MovieService, UserService, LocalService, LoggedInGuard, AuthResolver, MovieEffects,
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}},
    {provide: HTTP_INTERCEPTORS, useClass: MovieInterceptor, multi: true}
  ],
  exports: [],
  bootstrap: [AppComponent],
  entryComponents: [TabComponent]
})
export class AppModule { }