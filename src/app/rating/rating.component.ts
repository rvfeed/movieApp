import { Component, OnInit, SimpleChanges, Input, Output, ViewChild, Inject } from '@angular/core';
import { MovieRating } from "../lib/rating.class";
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { RatingFormComponent} from "../rating-form/rating-form.component";
import { FormGroup,FormControl, Validators } from'@angular/forms'
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']   
})
export class RatingComponent implements OnInit {
 @Input("movieList") movieList:Array<MovieRating> = [];
 @Input() count : number = 0;
 ratings: Number[] = [1,2,3,4,5,7,8,9,10];
 isEdit: boolean = true;

 msg: any = {};
 myForm:any = {};
constructor(private movieSer: MovieService, private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig ){
  console.log(this)
}
  ngOnInit() { 

    this.movieSer.companyObs$
        .subscribe(
                (movie: MovieRating) => this.movieList.push(movie)
              );
    }
  ngOnChanges(change: SimpleChanges){
    console.log("change", change)
  }
  ngdoCheck(){    
  }
  deleteMovie(id){
  this.http.delete(this.config.apiEindPoint+"/movie/"+id)
                  .subscribe((res: any) => {
                    
                      this.msg.success = res.success;
                      this.msg.message = res.message;
                      if(res.success)
                          this.movieList = this.movieList.filter( movie => movie._id != id)
                  });
  }
  updateMovie(id){
    delete this.myForm["_id"]
    console.log(this.myForm)
    
    this.http.put(
                  this.config.apiEindPoint+"/movie/"+id, 
                  { movie: this.myForm }
                  )
                  .subscribe(msg => console.log(msg))
  }
  enableEdit(id){
 this.isEdit = false;
    console.log(this.myForm)
    console.log(this.movieList.filter( m =>  m._id == id)[0])
    this.myForm = this.movieList.filter( m =>  m._id == id)[0]; 
  }
}
