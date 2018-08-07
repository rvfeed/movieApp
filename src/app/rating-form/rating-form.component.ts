import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule,
  FormsModule,FormGroup,FormControl, Validators } from'@angular/forms'
import { MovieRating } from "../lib/rating.class"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-rating-form',
  templateUrl: './rating-form.component.html',
  styleUrls: ['./rating-form.component.css']
  
})
export class RatingFormComponent implements OnInit {
myForm: FormGroup;
movies: Array<MovieRating>;
@Output() movieOut: any = new EventEmitter<MovieRating>()
  constructor(private movieSer: MovieService, private http: HttpClient) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      movieName: new FormControl("", Validators.required),
      rating: new FormControl("", Validators.required),
      director: new FormControl("", Validators.required),
      cast: new FormControl("", Validators.required),

    })
  }
  save(){
    if(this.myForm.valid){
   //   this.movieSer.changeMessage(this.myForm.value);   
   this.http.post("http://localhost:9090/movies", {movie: this.myForm.value}).subscribe( movies => console.log(movies));
 
     // this.movieOut.emit(this.myForm.value); 
    }else{
       console.log("not valid!")
    }
    
  }
  }


