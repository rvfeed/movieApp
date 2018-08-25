import { Injectable } from '@angular/core';
import { HttpInterceptor, 
         HttpEvent,
         HttpRequest,
         HttpHandler } from "@angular/common/http";
import { Observable} from "rxjs";
import {LocalService} from '../services/storage/local.service'

@Injectable()
export class MovieInterceptor implements HttpInterceptor {
  constructor(private localSer: LocalService) { }
  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log(req.body)
    const reqClone = req.clone()
    reqClone.body['sub-token'] = this.localSer.getFromSession("sub-token");
      return next.handle(reqClone);
  }

}
