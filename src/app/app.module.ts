import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule,  FormsModule } from'@angular/forms';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating/rating.component';
import { RatingFormComponent } from './rating-form/rating-form.component';
import {MovieService } from "./services/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    RatingFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
