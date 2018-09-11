import { Injectable} from "@angular/core"
import { Router } from '@angular/router'
import {Actions, Effect} from "@ngrx/effects";
import { Store} from "@ngrx/store"
import { ActivatedRouteSnapshot} from "@angular/router"
import { Observable } from 'rxjs';
import {UserService} from "../services/user/user.service";
import {LocalService} from "../services/storage/local.service";
import {MovieService} from "../services/movie.service";
import { MovieRating } from '../lib/rating.class'
import {RouterAction, ROUTER_NAVIGATION, RouterNavigationAction} from '@ngrx/router-store';
import {LOGIN} from '../store/type'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class MovieEffects{
    constructor(
        private userSer: UserService,
        private localSer : LocalService,
        private store: Store<any>,
        private router: Router,
        private actions: Actions,
        private movieSer: MovieService
    ){
        
    }


@Effect()
   login = this.actions
               .ofType("LOGIN")
               .switchMap((a: LOGIN) => {
         
                    return this.userSer.login(a.payload)
                               .map((resp:MovieRating[]) => {  this.router.navigate(['/dashboard']); 
                               return {type: 'LOGIN_SUCCESS', payload: resp};
                                })
                               .catch(e => {
                                    console.log('Error', e);
                                    return Observable.of({type: 'LOGIN_FAILURE', payload: {error: e, success: false}});
                                });
    });  

    @Effect()
        loadMovies = this.actions.ofType("LOAD_MOVIES")
        .switchMap((r: any) => { console.log(r)
            return  this.movieSer.getMovies(r.payload.filters)    
            .map((resp) => { console.log(resp); 
                return {type: 'MOVIES_LOAD_SUCCESS', payload: {movies: resp}}
            })
                               .catch(e => {
                                    console.log('Error', e);
                                    return Observable.of({type: 'MOVIES_LOAD_FAILURE', payload: {error: e, success: false}});
                                });
        })
            @Effect()
        deleteMovies = this.actions.ofType("DELETE_MOVIE")
        .switchMap((r: any) => { console.log(r)
            return  this.movieSer.deleteMovie(r.payload[0]._id)    
            .map((resp) => { console.log(resp); 
                return {type: 'MOVIE_DELETE_SUCCESS', payload: {result: resp}}
        })
                               .catch(e => {
                                    console.log('Error', e);
                                    return Observable.of({type: 'MOVIE_DELETE_FAILURE', payload: {error: e, success: false}});
                                });
        })

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
        //this.store.select("app").subscribe(console.log)

    
}