import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {APP_CONFIG, IAppConfig} from '../../app.config'

@Injectable()
export class UserService {

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private config: IAppConfig) { }
  registration(user){
    console.log({user})
    return this.http.post(this.config.apiEindPoint+"/register", {user})
  }
  login(user){
    return this.http.post(this.config.apiEindPoint+"/login", {user}, {withCredentials: true});
  }
}
