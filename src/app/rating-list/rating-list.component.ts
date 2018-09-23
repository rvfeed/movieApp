import { Component, OnInit, Inject, ViewChild, ViewChildren
  , QueryList,Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { MovieRating, SearchMovie } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { map } from 'rxjs/operators/map';
import { RouterState, ActivatedRoute, ParamMap, } from '@angular/router';
import { LocalService } from '../services/storage/local.service';
import { RatingComponent} from '../rating/rating.component';
import {Store} from '@ngrx/store';
import { getActions} from '../store/actions';
import { } from '../store/reducer';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.css']
})
export class RatingListComponent implements OnInit {
  movieList: MovieRating[] = [];
  showNumOfMovies : Number[] = [5,10,20,30];
  sortBy : any[] = [{name: "Latest", value: "addedDate"}, {name: "Rating", value: "rating"}, {name: "movieName", value: "Movie Name"}];
   @Input('limit') ratingList:any = new SearchMovie({ limit: 5, sortedBy: this.sortBy[0].value});;
  msg: any = {};
  isTabs: boolean = false;
  isLoggedIn: boolean = false;
  @ViewChildren(RatingComponent) ratingComp:QueryList<RatingComponent> ;
  @Output() editMovie : EventEmitter<MovieRating> = new EventEmitter<MovieRating>()
  @Output() movieOut = new EventEmitter<any>();
  checkedMovies: any[] = [];
  constructor(private movieSer: MovieService,
              private localSer: LocalService,
              private http: HttpClient,
              private router: ActivatedRoute,
              private store: Store<any>,
              @Inject(APP_CONFIG) private config: IAppConfig) {
     
   }  
  ngOnInit(){
    this.localSer.isLoggedIn.subscribe( isIn => this.isLoggedIn = isIn );
    let search = this.router.snapshot.paramMap.get('searchText');
    if(search){
        this.ratingList = new SearchMovie({searchText: search});
        console.log(this.ratingList)
    }
    this.movieSer.behavObs$.subscribe(a => {
      if(a.length){
        if(this.checkedMovies.includes(a)){
          this.checkedMovies.splice(this.checkedMovies.indexOf(a), 1)
        }else{
          this.checkedMovies.push(a);
        }
      
      }
       this.store.select("app").subscribe( result => { 
       if(result)  this.movieList = result.movies}) 

      console.log(this.checkedMovies)
   //   this.checkedMovies = this.checkedMovies.filter( m => m.checked);
    });
    this.getMovies();

  
  }
  ngOnChanges(change: SimpleChanges){
    
   
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   
  }
deleteSelcted(){
 
 this.movieSer.deleteSelectedMovies(this.checkedMovies)
              .subscribe((res: any) => {
                   let {success, message}  = res;
                    this.msg = {success, message};
                    if(message){
                       this.getMovies();
                    }  
              })
}
  deleteMovie(id){ 
     const actionState = getActions("DELETE_MOVIE", this.movieList.filter(movie => movie._id == id));
this.store.dispatch(actionState);
    console.log(id)
/*     this.movieSer
     .deleteMovie(id)
     .subscribe(
               (res: any) => {                    
                   let {success, message}  = res;
                    this.msg = {success, message};
                    if(message){
                       this.getMovies();
                    }                  
                });
                */
  }
  getMovies(){
   // console.log("hiiiiiiiiiiiiiiiiiiiiiiii")
    const getMovies = getActions("LOAD_MOVIES", {filters: this.ratingList});
    this.store.dispatch(getMovies);
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
