import { Component, OnInit, Inject, ViewChild, ViewChildren
  , QueryList,Input, Output, SimpleChanges, EventEmitter } from '@angular/core';
import { User, SearchUser } from "../lib/user.class";
import { Router} from "@angular/router"
import {MovieService } from "../services/movie.service";
import {HttpClient} from '@angular/common/http';
import {APP_CONFIG, IAppConfig} from "../app.config";
import { map } from 'rxjs/operators/map';
import { RouterState, ActivatedRoute, ParamMap, } from '@angular/router';
import { LocalService } from '../services/storage/local.service';
import { UserService} from '../services/user/user.service'
import { UserComponent} from '../user/user.component'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  movieList: User[] = [];
  showNumOfMovies : Number[] = [5,10,20,30];
  sortBy : any[] = [{name: "Latest", value: "addedDate"}, {name: "Rating", value: "rating"}, {name: "movieName", value: "Movie Name"}];
   @Input('limit') ratingList:any = new SearchUser({ limit: 5, sortedBy: this.sortBy[0].value,});;
  msg: any = {};
  isTabs: boolean = false;
  isLoggedIn: boolean = false;
  @ViewChildren(UserComponent) ratingComp:QueryList<UserComponent> ;
   @Output() editMovie : EventEmitter<User> = new EventEmitter<User>()
  @Output() movieOut = new EventEmitter<any>();
  checkedMovies: any[] = [];
  constructor(private movieSer: MovieService,
  private localSer: LocalService,
    private http: HttpClient,
    private router: ActivatedRoute,
    private userSer: UserService,
    @Inject(APP_CONFIG) private config: IAppConfig) {
     
   }  
  ngOnInit(){
    console.log(this.router.snapshot.data)
    this.localSer.isLoggedIn.subscribe( isIn => {
      console.log(isIn);
       this.isLoggedIn = isIn
    } );
    let search = this.router.snapshot.paramMap.get('searchText');
    if(search){
        this.ratingList = new SearchUser({searchText: search});
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
        

      console.log(this.checkedMovies)
   //   this.checkedMovies = this.checkedMovies.filter( m => m.checked);
    });
    this.getUsers();
  /*  this.movieSer.movieObs$.subscribe( (mov: User) => { 
     this.getUsers();
    });*/
  
  }
  ngOnChanges(change: SimpleChanges){
    
   
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
   
  }
deleteSelcted(){
 this.userSer.deleteSelectedUsers(this.checkedMovies)
              .subscribe((res: any) => {
                   let {success, message}  = res;
                    this.msg = {success, message};
                    if(message){
                       this.getUsers();
                    }  
              })
}
  deleteUser(id){   
    console.log(id)
     this.userSer
     .deleteUser(id)
     .subscribe(
               (res: any) => {                    
                   let {success, message}  = res;
                    this.msg = {success, message};
                    if(message){
                       this.getUsers();
                    }                  
                });
  }
  getUsers(){
 this.userSer.getUsers()    
                  .subscribe((movie: any) => {
                      this.movieList = [];
                      movie.result.map( mov =>  this.movieList.push(
                        new User(mov.username,
                           mov.email, mov._id)
                      )
                  )
            });
  }
  sortByFn(){   
   this.getUsers();
  }
  searchMovie(){
    this.getUsers();
  }
  reset(){
    this.ratingList = { limit: 5, sortBy: this.sortBy[0].value, search:''};
    this.getUsers();
  }

}
