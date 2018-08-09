import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { MovieRating } from "../lib/rating.class";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
@Injectable()
export class MovieService {  
  private companyObs = new Subject<MovieRating>();
  companyObs$ = this.companyObs.asObservable();
  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
    this.http.get(config.apiEindPoint+"/movies")       
          .subscribe( (movies: any) => movies.map(movie=>this.companyObs.next(movie)));
   }
  
  addMovie(movie: any) {
    console.log(movie)
    this.companyObs.next(movie);
  }
}
