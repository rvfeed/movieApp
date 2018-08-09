import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { MovieRating } from "../lib/rating.class";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'
@Injectable()
export class MovieService {  
  private companyObs = new Subject<MovieRating>();
  companyObs$ = this.companyObs.asObservable();  
private movieObs = new Subject<MovieRating>();
movieObs$ = this.movieObs.asObservable();
  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
 
  }
  
/*  addMovie(movie: any) {
    console.log(movie)
    this.companyObs.next(movie);
  }*/
  emitMovie(msg: MovieRating){
       return this.movieObs.next(msg);
  }
   getMovies(limit: Number){
        return this.http.get(this.config.apiEindPoint+"/movies/"+limit);          
  }
}
