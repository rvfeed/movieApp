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
  constructor() { }

  ngOnInit() {
  //  this.addmovie();
  }
addMovie(){
      this.tabsComps.openTab(
      'New Person',
      this.editMovieTemplate, 
      {},
      true
    );
  
}
}
