import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MovieRating, SearchMovie } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { map } from 'rxjs/operators/map';
import { RouterState, ActivatedRoute, ParamMap, } from '@angular/router';
@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  movieList: MovieRating[] = [];
  showNumOfMovies : Number[] = [5,10,20,30];
  sortBy : any[] = [{name: "Latest", value: "addedDate"}, {name: "Rating", value: "rating"}];
  ratingList:any ={};
  msg: any = {};
  constructor(private movieSer: MovieService, 
    private http: HttpClient,
    private router: ActivatedRoute,
    @Inject(APP_CONFIG) private config: IAppConfig) {
     
   }  
  ngOnInit(){
    this.router.paramMap.subscribe( (p) => {
      this.ratingList = new SearchMovie({searchText: p.params.searchText});
      this.getMovies();
      console.log(p )
    })
    this.reset();
    this.movieSer.movieObs$.subscribe( (mov: MovieRating) => { 
     this.movieList.unshift(mov);
    });
  
  }

  deleteMovie(id){      
     this.movieSer
     .deleteMovie(id)
     .subscribe(
               (res: any) => {                    
                   let {success, message}  = res;
                    this.msg = {success, message};
                    if(message){
                       this.getMovies();
                    }                  
                });
  }
  getMovies(){
 this.movieSer.getMovies(this.ratingList)    
                  .subscribe((movie: MovieRating[]) => {
                      this.movieList = [];
                      movie.map( mov =>  this.movieList.push(
                        new MovieRating(mov.movieName,
                           mov.rating, mov.director, mov.cast, mov.genre, mov._id)
                      )
                  )
            });
  }
  sortByFn(){   
   this.getMovies();
  }
  searchMovie(){
    this.getMovies();
  }
  reset(){
    this.ratingList = { limit: 5, sortBy: this.sortBy[0].value, search:''};
    this.getMovies();
  }

}
