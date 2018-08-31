import { Injectable} from "@angular/core"
import {Actions, Effect} from "@ngrx/effects";
import { Store} from "@ngrx/store"
import { ActivatedRouteSnapshot} from "@angular/router"
import { Observable } from 'rxjs';
import {UserService} from "../services/user/user.service";
import {RouterAction, ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {LOGIN} from '../store/type'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class MovieEffects{
    constructor(
        private userSer: UserService,
        private store: Store<any>,
        private actions: Actions
    ){
        
    }


 /*      @Effect() 
 hello = this.actions.ofType("LOGIN").map(a => { console.log(this.actions.ofType(ROUTER_NAVIGATION).map( a=> console.log(a)))})    
    .switchMap(a => Observable.of() )*/
/*
@Effect()
 navigateToTalks = this.actions.ofType(ROUTER_NAVIGATION)
     .map(this.firstSegment)
        .filter(s => { console.log(s); return s.url[0].path === "login"})
        .withLatestFrom(this.store)
    .switchMap((r: ActivatedRouteSnapshot) => {   
        console.log(r[0])
      return this.userSer.login({"username": "raj1", "password": "123"})
                        .map(resp => ({type: 'LOGIN_SUCCESS', payload: resp}));
    }).catch(e => {
      console.log('Network error', e);
      return Observable.of();
    });

     private  firstSegment(r: RouterNavigationAction) {
  return r.payload.routerState.root.firstChild;
}*/
@Effect()
    dashboard = this.actions.ofType("MOVIES")
@Effect()
   login = this.actions
               .ofType("LOGIN")
               .switchMap((a: LOGIN) => {
                   console.log(a)
                    return this.userSer.login(a.payload)
                               .map((resp:LOGIN) => ({type: 'LOGIN_SUCCESS', payload: resp}))
                               .catch(e => {
                                    console.log('Error', e);
                                    return Observable.of({type: 'LOGIN_FAILURE', payload: {error: e, success: false}});
                                });
    }); 
        //this.store.select("app").subscribe(console.log)

    
}