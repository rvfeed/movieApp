import { Component, OnInit } from '@angular/core';
import { SearchMovie } from '../lib/rating.class';
import { LocalService } from '../services/storage/local.service';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {
limitTop: SearchMovie = new SearchMovie({sortedBy: 'rating', limit: 5});
  constructor(private localStr: LocalService) { }

  ngOnInit() {
   // this.localStr.checkUser("top5");
  }

}
