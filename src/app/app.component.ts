import { Component, ViewChild } from '@angular/core';
import { LocalService } from './services/storage/local.service'
import { RatingComponent } from './rating/rating.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie App'; 
 
  constructor(private localStr : LocalService) {}  
ngOnInit(){
  this.localStr.localObs$
               .subscribe( m => console.log(m));
}


}
