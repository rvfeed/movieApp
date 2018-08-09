import { Component, OnInit } from '@angular/core';
import { MovieRating } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  movieList: MovieRating[] = [];
  constructor(private movieSer: MovieService) { }  
  ngOnInit(){
    this.movieSer.companyObs$
    .subscribe(
            (movie: MovieRating) => this.movieList.push(
              new MovieRating(movie.movieName, movie.rating, movie.director, movie.cast)
            )
          );
  }

}
