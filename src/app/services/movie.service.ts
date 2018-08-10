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
testObs:  Observable<any>;
testProm: Promise<any>;
obsFun: any;
  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
  this.testObservable(1)
  this.testPromise(2);
  console.log(this.movieObs)

  }
  
/*  addMovie(movie: any) {
    console.log(movie)
    this.companyObs.next(movie);
  }*/
  emitMovie(msg: MovieRating){
       return this.movieObs.next(msg);
  }
   getMovies(obj){
        return this.http.post(this.config.apiEindPoint+"/movies", obj);          
  }
  deleteMovie(id){
     return this.http.delete(this.config.apiEindPoint+"/movie/"+id);
  }
  testObservable(item){
     this.testObs = new Observable((observer) =>{     
   observer.next("obs");    
        return { unsubscribe(){ console.log("unsubscribed");}}
    })
  }
  testPromise(item = 1){
    this.testProm = new Promise( (resolve, reject) => {
      resolve("prom")
    
    })
  }
}
