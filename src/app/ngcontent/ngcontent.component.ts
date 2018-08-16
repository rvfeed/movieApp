import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngcontent',
  templateUrl: './ngcontent.component.html',
  styleUrls: ['./ngcontent.component.css']
})
export class NgcontentComponent implements OnInit {
select1: string = "span";
  constructor() { 
    this.select1 = "h1";
  }

  ngOnInit() {
  }
getSelect(){
  return this.select1;
}
}
