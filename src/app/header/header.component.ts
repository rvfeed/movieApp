import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms"
import {MovieService} from '../services/movie.service';
import {LocalService } from "../services/storage/local.service"
import { SearchMovie} from '../lib/rating.class'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  loggedIn: boolean = false;
  constructor(private movSer :  MovieService,
              private router: Router,
              private localSer: LocalService) { }

  ngOnInit() {
    this.loggedIn = this.localSer.localUserName == "in";
    this.localSer.localObs$
                 .subscribe( user => {
                   console.log(user == "in")
                  this.loggedIn = user == "in";
                 })     
    
    this.searchForm = new FormGroup({
      searchText: new FormControl("", Validators.required)
    })
  }  
  searchMovie(){
    console.log(this.searchForm.value)
    this.router.navigate(['movies/'+this.searchForm.value.searchText]);
  }

  logout(){
    this.localSer.checkUser("out");
    this.localSer.removeFromSession("sub-token");
    this.localSer.isLoggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
