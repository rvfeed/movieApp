import { Component, OnInit, SimpleChanges, Input, Output, ViewChild } from '@angular/core';
import { MovieRating } from "../lib/rating.class";
import {MovieService } from "../services/movie.service";
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']   
})
export class RatingComponent implements OnInit {
 @Input("movieList") movieList:Array<MovieRating> = [];
 @Input() count : number = 0;
constructor(private movieSer : MovieService){}
  ngOnInit() { 
    this.movieSer.companyObs$
    .subscribe(
              (movie: MovieRating) => this.movieList.push(movie)
              );
    }
  ngOnChanges(change: SimpleChanges){
    console.log("change", change)
  }
  ngdoCheck(){    
  }
}
