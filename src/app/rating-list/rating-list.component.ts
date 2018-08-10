import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MovieRating, SearchMovie } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { map } from 'rxjs/operators/map';
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
  constructor(private movieSer: MovieService, private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
     this.ratingList = { limit: 5, sortBy: this.sortBy[0].value, search:''};
   }  
  ngOnInit(){
    this.movieSer.movieObs$.subscribe( (mov: MovieRating) => { 
     this.movieList.push(mov);
    });
  this.getMovies(this.ratingList);
  }
  showNumMovies(){  
    this.getMovies(this.ratingList);
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
  testObserve(r){
    console.log("start");
    this.movieSer.testProm.then( d => console.log(d))
    this.movieSer.testObs.subscribe( s => console.log(s));
    console.log("end")  
  }
  getMovies(param){
 this.movieSer.getMovies(this.ratingList)    
                  .subscribe((movie: MovieRating[]) => {
                      this.movieList = [];
                      movie.map( mov =>  this.movieList.push(
                        new MovieRating(mov.movieName, mov.rating, mov.director, mov.cast, mov._id)
                      )
                  )
            });
  }
  sortByFn(){   
   this.getMovies(this.ratingList);
  }
  searchMovie(){
    this.getMovies(this.ratingList);
  }

}
