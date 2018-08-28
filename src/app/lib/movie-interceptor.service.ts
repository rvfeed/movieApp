import { Injectable } from '@angular/core';
import { HttpInterceptor, 
         HttpEvent,
         HttpRequest,
         HttpHandler,
        HttpResponse,
      HttpErrorResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable} from "rxjs";
import {LocalService} from '../services/storage/local.service'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
@Injectable()
export class MovieInterceptor implements HttpInterceptor {
  constructor(private localSer: LocalService, private router: Router) { }
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req.headers)
   
    if(req.headers.has("x-dd")){      
      const headers = req.headers.delete("x-dd")
       return next.handle(req.clone({headers: headers}))
    }
    
    const reqClone = req.clone()
    reqClone.body['sub-token'] = this.localSer.getFromSession("sub-token");
      return next.handle(reqClone)
                    .catch( (err: HttpErrorResponse): Observable<any> => {
                    if(err.status == 403){
                       this.localSer.logout();
                     }
                   return Observable.throw(err);
                 });
  }

}
