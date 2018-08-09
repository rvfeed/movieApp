import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MovieRating } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { map } from 'rxjs/operators/map'
@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  movieList: MovieRating[] = [];
  showNumOfMovies : Number[] = [5,10,20,30];
  numOfMovies: Number = 5;
  msg: any = {};
  constructor(private movieSer: MovieService, private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
      this.movieSer.getMovies(this.numOfMovies);
   }  
  ngOnInit(){
    this.movieSer.movieObs$.subscribe( (mov: MovieRating) => { 
     this.movieList.push(mov);
    });
    this.movieSer.getMovies(this.numOfMovies)   
    .subscribe(
            (movie: MovieRating[]) => {
              console.log("okk"); 
              movie.map( mov =>  this.movieList.push(
              new MovieRating(mov._id, mov.movieName, mov.rating, mov.director, mov.cast)
              ))
            }
          );
  }
  showNumMovies(){
    this.movieList = [];
    this.movieSer.getMovies(this.numOfMovies)
      .subscribe(
            (movie: MovieRating[]) => {
              console.log(movie); 
                  movie.map( mov =>  this.movieList.push(
              new MovieRating(mov._id, mov.movieName, mov.rating, mov.director, mov.cast)
                  ))
            }
          );;
  }
    deleteMovie(id){
      console.log(id, "id")
      this.http.delete(this.config.apiEindPoint+"/movie/"+id)
                  .subscribe((res: any) => {                    
                      let {success, message}  = res;
                      this.msg = {success, message};
                      if(message){
                        this.showNumMovies();
                      }                  
                  });
  }

}
