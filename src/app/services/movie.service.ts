import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { MovieRating } from "../lib/rating.class";
import {HttpClient} from '@angular/common/http';
@Injectable()
export class MovieService {  
  private companyObs = new Subject<MovieRating>();
  companyObs$ = this.companyObs.asObservable();
  constructor(private http: HttpClient) {
    this.http.get("http://localhost:9090/movies")       
          .subscribe( movies => movies.map(movie=>this.companyObs.next(movie)));
   }
  
  changeMessage(message: any) {
    console.log(message)
    this.companyObs.next(message);
  }
}
