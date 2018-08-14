import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {UserService } from "../services/user/user.service";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm : FormGroup;
  username: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  email: FormControl;
  gender: FormControl;
  isFormValid: boolean = false;

  constructor( private userSer: UserService) { }

  ngOnInit() {
    this.username  = new FormControl("", Validators.required);
    this.password  = new FormControl("", Validators.required);
    this.confirmPassword  = new FormControl("", Validators.required);
    this.email  = new FormControl("", Validators.required);
    this.gender  = new FormControl("Male", Validators.required);
    this.registrationForm = new FormGroup({
      username : this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      email: this.email,
      gender: this.gender
    })
  }

  register(){
    if(this.registrationForm.valid){
     
      console.log(this.registrationForm.value)
      this.userSer.registration(this.registrationForm.value)
                  .subscribe( msg => console.log(msg))
    }else{
      this.isFormValid = true;
    }
    
  }
}
