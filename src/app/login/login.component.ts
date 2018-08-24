import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService } from "../services/user/user.service";
import { Router } from '@angular/router';
import { LocalService } from '../services/storage/local.service'
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
            private localStr: LocalService) { }

  ngOnInit() {
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
      this.userSer.login({ username, password })
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
                    
                  })
    }
    console.log(this.loginForm)
  }
}
