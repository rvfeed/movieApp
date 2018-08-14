import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  username: FormControl;
  password: FormControl;
  constructor() { }

  ngOnInit() {
    this.username  = new FormControl("", Validators.required);
    this.password  = new FormControl("", Validators.required);
    this.loginForm = new FormGroup({
      username : this.username,
      password: this.password
    })
  }

  login(){
    console.log(this.loginForm)
  }
}
