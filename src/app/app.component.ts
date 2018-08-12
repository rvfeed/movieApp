import { Component, ViewChild } from '@angular/core';

import { RatingComponent } from './rating/rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie App'; 
 
  constructor() { }  
ngOnInit(){}


}
