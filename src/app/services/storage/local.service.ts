import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class LocalService {
  private localObs = new Subject<any>();
  localObs$ = this.localObs.asObservable();
  constructor() { }
  get localUserName(){
    return sessionStorage.getItem("user")
  }
  set localUserName(user){
    sessionStorage.setItem("user", user)
  }
  checkUser(n:string){
    this.localUserName = n;
    this.localObs.next(this.localUserName)
  }
}
