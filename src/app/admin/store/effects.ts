import {Injectable} from '@angular/core'
import {Actions, Effect} from '@ngrx/effects'
import { Observable } from 'rxjs'
import { AclService} from '../services/acl.service'
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
@Injectable()
export class AclEffects{
    constructor(
        private actions : Actions,
        private acl: AclService
    ){
     //   console.log(this.acl.getRoles().subscribe(console.log))
    }
    @Effect()
    getAcls = this.actions.ofType('GET_ACL')
                          .switchMap( (a:any) =>
                            {  
                                console.log("5555555555555555"); 
                                return this.acl.getRoles()
                                .map((resp:any) => ({type: 'GET_ACL_SUCCESS', payload: resp}))
                               .catch(e => {
                                    console.log('Error', e);
                                    return Observable.of({type: 'GET_ACL_FAILURE', payload: {error: e, success: false}});
                                });
                 
                            }
                            )
                       
}
