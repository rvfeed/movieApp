import {Injectable } from "@angular/core";
import {Resolve} from "@angular/router";
import {LocalService} from "../storage/local.service"

@Injectable()
export class AuthResolver implements Resolve<any>{
    constructor(private local: LocalService){}
    resolve(){
        this.local.isLoggedIn.next(!!this.local.localUserName)
        return !!this.local.localUserName;
    }
} 

