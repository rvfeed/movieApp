import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,FormGroup,FormControl, Validators } from'@angular/forms'
import { MovieRating } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import {APP_CONSTANTS, DefaultValues} from "../app.constants";
@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']  
})
export class RatingFormComponent implements OnInit {
myForm: FormGroup;
movies: Array<MovieRating>;
msg: any = {};
ratings: Number[];
movieName: FormControl;
rating: FormControl;
genre: FormControl;
director: FormControl;
cast: FormControl;
genres : String[];
isClicked: boolean = false; 
@Output() movieOut: any = new EventEmitter<MovieRating>()
@Output() movieAdded : EventEmitter<string> = new EventEmitter<string>()
  constructor(private movieSer: MovieService, private http: HttpClient,
     @Inject(APP_CONFIG) private config: IAppConfig,
    @Inject(APP_CONSTANTS) private consts: DefaultValues) {
      this.ratings = this.consts.RATINGS;
      this.genres = this.consts.GENRES;
     }

  ngOnInit() { 
    this.movieName = new FormControl("", Validators.required);
     this.rating = new FormControl("", Validators.required);
     this.genre = new FormControl("", Validators.required);
      this.director = new FormControl("", Validators.required);
      this.cast = new FormControl("", Validators.required);
    this.myForm = new FormGroup({
      movieName: this.movieName,
      rating: this.rating,
      genre : this.genre,
      director: this.director,
      cast: this.cast
    });
   }
  save(){  console.log(this.myForm)
    this.isClicked = true;
    if(!this.myForm.valid) 
        console.log("not valid!")

    this.movieSer.addMovie(this.myForm.value)
                .subscribe( (res: any) => {
                    this.msg.success = res.success;
                    this.msg.message = res.message;
                    if(this.msg.success){
                      this.movieSer.emitMovie(res.data);
                      this.reset();                     
                    }
                });     
    
  }

  reset(){
    this.myForm.reset();
     this.isClicked = false;
  }
  }


