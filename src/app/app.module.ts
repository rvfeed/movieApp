import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes}  from "@angular/router"
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule,  FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import {MovieService } from "./services/movie.service";
import {APP_CONFIG, AppConfig} from "./app.config";
import { RatingListComponent } from './rating-list/rating-list.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { APP_CONSTANTS, RATINGS, GENRES} from './app.constants';
import { Top5Component } from './top5/top5.component';
import { MoviesComponent } from './movies/movies.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';

import { Child1Component } from './dashboard/child1/child1.component';
import { Child2Component } from './dashboard/child2/child2.component';
import { Child3Component } from './dashboard/child3/child3.component';
import { AppDashBoardModule } from './dashboard/app.dashboard.module'
let routes: Routes = [
  
  

  {path: 'top5', component: Top5Component},
 
  {path: 'movies/:searchText', component: RatingListComponent},
  {path: 'movies', component: RatingListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: FileNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    RatingFormComponent,
    RatingListComponent,
    HeaderComponent,

    Top5Component,
    MoviesComponent,
    BlogComponent,
    LoginComponent,
    LogoutComponent,
    FileNotFoundComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  
    RouterModule.forRoot(routes, {useHash: true}),
      AppDashBoardModule
  ],
  providers: [MovieService, 
    {provide: APP_CONFIG, useValue: AppConfig},
    {provide: APP_CONSTANTS, useValue: {RATINGS, GENRES}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
