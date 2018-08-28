import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { Router } from "@angular/router";


@Injectable()
export class LocalService {
  private localObs = new Subject<any>();
  public isLoggedIn = new BehaviorSubject(false)
//  public replayObs = new BehaviorSubject<any>(3);


  localObs$ = this.localObs.asObservable();
  constructor(private router: Router) {
  /*   this.replayObs.next(1);  
     this.replayObs.next(3);
     setTimeout( () => this.replayObs.next(2), 3000);
   */
   }
  get localUserName(){
    return sessionStorage.getItem("user")
  }
  set localUserName(user){
    sessionStorage.setItem("user", user);
  }
  storeInSession(name, value){
    sessionStorage.setItem(name, value)
  }
   getFromSession(name){
    return sessionStorage.getItem(name);
  }
  removeFromSession(name){
    sessionStorage.removeItem(name);
  }
  checkUser(n:string){
    this.localUserName = n;
    this.localObs.next(this.localUserName)
  }
  logout(){
       this.checkUser("out");
    this.removeFromSession("sub-token");
    this.removeFromSession("user");
    this.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
