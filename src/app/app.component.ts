import { Component, ViewChild } from '@angular/core';
import { MovieRating } from "./lib/rating.class"
import { RatingComponent } from './rating/rating.component';
import {MovieService } from "./services/movie.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; 
  movieList: MovieRating[] = [];
  pCount: number = 0;
  constructor(private movieSer: MovieService) { }
  @ViewChild(RatingComponent) vcr: any;
OnInit(){

}
getEmittedCount(count){
  console.log(count)
  this.pCount = count++;
}
  getMovieList(list){
    console.log(list)
    this.movieList.push(list);
    console.log(this.vcr)
    //setInterval(() => { this.movieList = ["asdfasd"]}, 3000)
  }
}
