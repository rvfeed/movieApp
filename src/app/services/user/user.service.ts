import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {APP_CONFIG, IAppConfig} from '../../app.config'
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { User, SearchUser } from "../../lib/user.class"
@Injectable()
export class UserService {
headers: HttpHeaders;
  constructor( private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) {
   this.headers = new HttpHeaders({"x-dd": "true"});
   }
  registration(user){
    return this.http.post(this.config.apiEindPoint+"/register", {user}, {headers: this.headers})
  }
  login(user){
    return this.http.post(this.config.apiEindPoint+"/login", {user}, {headers: this.headers, withCredentials: true});
  }
  getUsers(){
    return this.http.post(this.config.apiEindPoint+"/getUsers",{}, {withCredentials: true});
  }
    updateUser(id, user): Observable<any>{    
    return this.http.put(this.config.apiEindPoint+"/user/"+id, { user }, {withCredentials: true} ) 
  }
  emitMovie(msg: User){
      // return this.movieObs.next(msg);
  }

  deleteUser(id){
     return this.http.delete(this.config.apiEindPoint+"/user/"+id);
  }
  deleteSelectedUsers(movieIds){
     return this.http.post(this.config.apiEindPoint+"/deleteSelectedUsers/", {movieIds}, {withCredentials: true});
  }
}
