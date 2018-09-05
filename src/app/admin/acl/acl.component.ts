import { Component, OnInit } from '@angular/core';
import {AclService} from '../services/acl.service';
import { Store } from '@ngrx/store'
@Component({
  selector: 'app-acl',
  templateUrl: './acl.component.html',
  styleUrls: ['./acl.component.css']
})
export class AclComponent implements OnInit {
roles: any;
roleAccess: any = {};
  constructor(private acl: AclService, private store: Store<any>) { }

  ngOnInit() {
    //this.roleAccess = this.acl.getRoles()
    
    this.getAcls();
    this.store.select("aclFeature").subscribe((a) => {
      if(a.acl.result){
        console.log(a.acl.result[0]._id)
        delete  a.acl.result[0]._id
        this.roleAccess = a.acl.result[0];
        this.roles = Object.keys(this.roleAccess);
      }
    })
  }
  getAcls(){
    console.log()
    this.store.dispatch({type: 'GET_ACL', payload:{}})
  }
  changeAccess(role: any): void{
    console.log(this.roleAccess)
    this.store.dispatch({type: 'GET_ACL', payload:this.roleAccess})
  }


}
