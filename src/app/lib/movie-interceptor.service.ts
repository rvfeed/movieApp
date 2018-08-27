import { Injectable } from '@angular/core';
import { HttpInterceptor, 
         HttpEvent,
         HttpRequest,
         HttpHandler,
        HttpResponse } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable} from "rxjs";
import {LocalService} from '../services/storage/local.service'
import 'rxjs/add/operator/do';
@Injectable()
export class MovieInterceptor implements HttpInterceptor {
  constructor(private localSer: LocalService, private router: Router) { }
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req.body)
    const reqClone = req.clone()
    reqClone.body['sub-token'] = this.localSer.getFromSession("sub-token");
      return next.handle(reqClone)
                 .do((ev: HttpEvent<any>) =>{
                    if(ev instanceof HttpResponse){
                     if(ev.status == 403){
                      this.router.navigate["/login"];
                     }
                    }
                 });
  }

}
