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
 @Input("movieList") movieDetails:MovieRating; 
 ratings: Number[] = [1,2,3,4,5,7,8,9,10];
 isEdit: boolean = true;
 msg: any = {};
 myForm:any = { isEdit: false};
constructor(private movieSer: MovieService,
   private http: HttpClient,
    @Inject(APP_CONFIG) private config: IAppConfig ){
  console.log(this)
}
  ngOnInit() { 

   
    }
  ngOnChanges(change: SimpleChanges){
    console.log("change", change)
  }
  ngdoCheck(){    
  }
  deleteMovie(id){
  this.http.delete(this.config.apiEindPoint+"/movie/"+id)
                  .subscribe((res: any) => {                    
                      let {success, message}  = res;
                      this.msg = {success, message};                     
                  });
  }
  updateMovie(id){
    delete this.myForm["_id"]
    
    console.log(this.myForm)
    
    this.http.put(this.config.apiEindPoint+"/movie/"+id, 
                  { movie: this.myForm } )
                  .subscribe( (res: any) => {
                    let {success, message}  = res;
                      this.msg = {success, message};
                      if(success){
                        this.cancel(id)
                      }
                  });
  }
  enableEdit(id){    
    this.myForm = this.movieDetails;
    this.isEdit = false; 
  }
  cancel(id){
    this.isEdit = true; 
  }
  ngOnDistroy(){
    console.log("distroyed")
  }
}
