import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms"
import {MovieService} from '../services/movie.service';
import { SearchMovie} from '../lib/rating.class'
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  
  constructor(private movSer :  MovieService, private router: Router) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      searchText: new FormControl("", Validators.required)
    })
  }
  searchMovie(){
    console.log(this.searchForm.value)
    this.router.navigate(['movies/'+this.searchForm.value.searchText])
//this.movSer.getMovies(new SearchMovie({"searchtext": this.searchForm.value.searchText}))
  }
}
