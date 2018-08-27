import { Injectable, Inject } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { MovieRating, SearchMovie } from "../lib/rating.class";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of'
@Injectable()
export class MovieService {  
  private companyObs = new Subject<MovieRating>();
  companyObs$ = this.companyObs.asObservable();  
private movieObs = new Subject<MovieRating>();
private behavObs = new BehaviorSubject<Array<string>>([]);
behavObs$ = this.behavObs.asObservable();
movieObs$ = this.movieObs.asObservable();
testObs:  Observable<any>;
testProm: Promise<any>;
checkMovies: any[] = [];
obsFun: any;
  constructor(private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig,
    
  ) {
  this.testObservable(1)
  this.testPromise(2);
  console.log(this.movieObs)

  }
  
  selectMultiCheck(moviesIds: string[]){

   // this.checkMovies = this.checkMovies.filter( movie => movie.checked)
    this.behavObs.next(moviesIds);
  }
 addMovie(movie: any): Observable<any> {    
    let { cast, movieName, rating, director, genre } = movie;       
    return this.http
                .post(this.config.apiEindPoint+"/addmovie",
                      {movie: { movieName, rating, director,
                       cast, genre, addedDate: Date.now()}}, {withCredentials: true})
  }
  updateMovie(id, movie): Observable<any>{    
    return this.http.put(this.config.apiEindPoint+"/movie/"+id, { movie }, {withCredentials: true} ) 
  }
  emitMovie(msg: MovieRating){
       return this.movieObs.next(msg);
  }
   getMovies(obj){
        return this.http.post(this.config.apiEindPoint+"/movies", obj, {withCredentials: true});          
  }
  deleteMovie(id){
     return this.http.delete(this.config.apiEindPoint+"/movie/"+id);
  }
  deleteSelectedMovies(movieIds){
     return this.http.post(this.config.apiEindPoint+"/deleteSelectedmovies/", {movieIds}, {withCredentials: true});
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
