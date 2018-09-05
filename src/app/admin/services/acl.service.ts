import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable()
export class AclService {
   _acl = {};
   _remote ="http://localhost:9090"
isLoggedInUser = user => true
  constructor(private http: HttpClient) {
    this.acl = {
      admin:{
          edit: true,
          delete: true,
          add: true,
          view: true
      },
      user:{
          edit: true ,
          delete: true,
          add: true,
          view: true
      },
      guest:{
          edit: false,
          delete: false,
          add: false,
          view: true
      },
      
  }
   }
  getRoles(){
    console.log("asdfsdaf")
    return this.http.get(this._remote+"/acl");
  } 
  getRole(role) { return this.acl[role]   }
  getCameCase = (str: string) => str[0].toUpperCase()+str.substr(1);
  set acl(acl){
   this._acl = acl;
  }
  get acl(){
    return this._acl;
  }
}
