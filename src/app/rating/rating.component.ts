import { Component, OnInit, SimpleChanges,
  Input, EventEmitter, Output, ViewChild, Inject } from '@angular/core';
import { MovieRating } from "../lib/rating.class";
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { RatingFormComponent} from "../rating-form/rating-form.component";
import { FormGroup,FormControl, Validators } from'@angular/forms';
import {APP_CONSTANTS, DefaultValues} from "../app.constants";
import { LocalService } from '../services/storage/local.service';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']   
})
export class RatingComponent implements OnInit {
 @Input("movieList") movieDetails:MovieRating;
 @Output() deleteMovie : EventEmitter<MovieRating> = new EventEmitter<MovieRating>()
 @Output() editMovie : EventEmitter<MovieRating> = new EventEmitter<MovieRating>()
 ratings: Number[];
 genres: String[];
 isEdit: boolean = true;
 msg: any = {};
 @Input("isLoggedIn") loggedIn: boolean = false;
 myForm:any = { isEdit: false};
 @Input() isTabs: boolean = false;
 intId: any = 0;
 deleteSelcted: Array<string> = new Array<string>();
constructor(private movieSer: MovieService,
   private http: HttpClient,
   private localStr:  LocalService,
  @Inject(APP_CONFIG) private config: IAppConfig,
  @Inject(APP_CONSTANTS) private consts: DefaultValues ){
   
  }
  ngOnInit() {
    this.ratings = this.consts.RATINGS;
    this.genres = this.consts.GENRES;
   }

  ngOnChanges(change: SimpleChanges){
    console.log("change", change)
  }
  ngDoCheck(){}

  delete(id){
    console.log(id)
    this.deleteMovie.emit(id);
  }
  updateMovie(id){
    delete this.myForm["_id"];    
    this.movieSer.updateMovie(id, this.myForm)
                  .subscribe( (res: any) => {
                    let {success, message}  = res;
                      this.msg = {success, message};
                      if(success){
                        this.cancel(id)
                      }
                  });
  }
  enableEdit(id){
    console.log("movieDetails",this.movieDetails)
    this.myForm = this.movieDetails;
    this.isEdit = false; 
  }
  selectDel(id){
    this.deleteSelcted.push(id);
  }
  cancel(id){
    this.isEdit = true; 
  }
  ngOnDistroy(){
    clearInterval(this.intId);
    console.log("distroyed")
  }
}
