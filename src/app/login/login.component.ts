import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService } from "../services/user/user.service";
import { Router } from '@angular/router';
import { LocalService } from '../services/storage/local.service'
import { Store } from "@ngrx/store";
import { getActions} from '../store/actions'
import { State} from '../store/type'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  username: FormControl;
  password: FormControl;
  message : String = '';
  constructor(private userSer : UserService,
              private router: Router,
            private localStr: LocalService,
            private store: Store<State>) {
             
             }

  ngOnInit() {
     this.store.select("app").subscribe((out : any) => {
          if(out && out.success){
                      this.localStr.checkUser("in");
                      this.localStr.isLoggedIn.next(true);
                      this.localStr.storeInSession("sub-token", out.token)
                      this.router.navigate(['/dashboard'])
                    }else{
                      console.log(out)
                      this.localStr.checkUser("out");
                      this.localStr.isLoggedIn.next(false);
                      this.message = "Login Failed"
                    }
     })
    this.username  = new FormControl("", Validators.required);
    this.password  = new FormControl("", Validators.required);
    this.loginForm = new FormGroup({
      username : this.username,
      password: this.password
    })
  }

  login(){
    if(this.loginForm.valid){
      let { username, password } = this.loginForm.value;
console.log(getActions("LOGIN", { username, password }))
let payload = getActions("LOGIN", { username, password });
this.store.dispatch(payload);

    /*  this.userSer.login({ username, password })
                  .subscribe( (out : any) => {
                    if(out.success){
                      this.localStr.checkUser("in");
                      this.localStr.isLoggedIn.next(true);
                      this.localStr.storeInSession("sub-token", out.token)
                      this.router.navigate(['/dashboard'])
                    }else{
                      this.localStr.checkUser("out");
                      this.localStr.isLoggedIn.next(false);
                      this.message = "Login Failed"
                    }
                    
                  })*/
    }
    console.log(this.loginForm)
  }
}
