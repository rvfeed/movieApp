import { Component, OnInit,
        ViewChild  } from '@angular/core';
import {TabsComponent} from '../tabs/tabs.component'
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
@ViewChild(TabsComponent) tabsComps : TabsComponent;
 @ViewChild('movieEdit') editMovieTemplate;
 @ViewChild('about') aboutTemplate;
  constructor() { }
  movie: any = {movieName: 'Raja'}
  ngOnInit() {
  //  this.addmovie();
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
