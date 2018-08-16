import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
addMovie: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  tobbleAddMovie(){
    this.addMovie = !this.addMovie;
  }
  back(){
    console.log("this.loc.back()");
  }
}
