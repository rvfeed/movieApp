import { Component, OnInit, ContentChild } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-goback',
  templateUrl: './goback.component.html',
  styleUrls: ['./goback.component.css']
})
export class GobackComponent implements OnInit {
   buttonText: string = "Go Back";
   constructor(private loc: Location) { }
//@ContentChild() cc;
  ngOnInit() {
  }
  goBack(){
    this.loc.back();
  }
ngAfterContentInit() {
 // console.log(this.cc);
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  
}
   goback(){
    this.loc.back();
  }

}
