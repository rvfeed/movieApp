import { Component, OnInit,
        ViewChild  } from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component';
import {RatingListComponent } from '../rating-list/rating-list.component'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
@ViewChild(TabsComponent) tabsComps : TabsComponent;
@ViewChild(RatingListComponent) ratingLists : RatingListComponent;
 @ViewChild('movieEdit') editMovieTemplate;
 @ViewChild('about') aboutTemplate;
  constructor() { }
  movie: any = {movieName: 'Raja'}
  ngOnInit() {
  //  this.addmovie();
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("ngAfterViewInit", this.ratingLists.isTabs = true)
  }
addMovie(){
  this.movie = {};
      this.tabsComps.openTab(
      'New Movie',
      this.editMovieTemplate, 
      {},
      true
    );
  
}
editMovie(movie){
console.log(movie)
  this.movie = movie;
    this.tabsComps.openTab(
      'Edit Movie',
      this.editMovieTemplate, 
      movie,
      true
    );
}
openEdit(){
   this.tabsComps.openTab(
      'About',
      this.aboutTemplate, 
      {},
      true
    );
}
}
