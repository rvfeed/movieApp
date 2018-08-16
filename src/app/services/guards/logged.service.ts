import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import {LocalService} from '../storage/local.service'

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private local: LocalService) { }
  canActivate(){    
    return !!(this.local.localUserName);
      
  }
}
