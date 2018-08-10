import { Component, OnInit, EventEmitter, Input, Output, Inject } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,FormGroup,FormControl, Validators } from'@angular/forms'
import { MovieRating } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']  
})
export class RatingFormComponent implements OnInit {
myForm: FormGroup;
movies: Array<MovieRating>;
msg: any = {};
ratings: Number[] = [1,2,3,4,5,7,8,9,10];
movieName: FormControl;
rating: FormControl;
director: FormControl;
cast: FormControl;
isClicked: boolean = false; 
@Output() movieOut: any = new EventEmitter<MovieRating>()
@Output() movieAdded : EventEmitter<string> = new EventEmitter<string>()
  constructor(private movieSer: MovieService, private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) { }

  ngOnInit() {
 
    this.movieName = new FormControl("", Validators.required);
     this.rating = new FormControl("", Validators.required);
      this.director = new FormControl("", Validators.required);
      this.cast = new FormControl("", Validators.required);
    this.myForm = new FormGroup({
      movieName: this.movieName,
      rating: this.rating,
      director: this.director,
      cast: this.cast
    });
    //this.myForm.valueChanges.subscribe( d => console.log(d))
  }
  save(){  console.log(this.myForm)
    this.isClicked = true;
    let { cast, movieName, rating, director } = this.myForm.value; 
    if(this.myForm.valid){    
    this.http.post(this.config.apiEindPoint+"/movies",
                {movie: { movieName, rating, director, cast, addedDate: Date.now()}})
                .subscribe( (res: any) => {
                    this.msg.success = res.success;
                    this.msg.message = res.message;
                    if(this.msg.success){
                      this.movieSer.emitMovie(res.data);
                      this.reset();                     
                    }
                });     
    }else{
       console.log("not valid!")
    }    
  }
  edit(id){
    
  }
  reset(){
    this.myForm.reset();
     this.isClicked = false;
  }
  }


