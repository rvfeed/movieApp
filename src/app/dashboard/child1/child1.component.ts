import { Component, OnInit, ViewChild, 
         ContentChild, HostListener, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { GobackComponent } from '../../form-elements/goback/goback.component'
@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@ViewChild(GobackComponent) goback1;
  constructor(private loc: Location, public el: ElementRef) { }

  ngOnInit() {
  }
@HostListener("mouseover")
onhover(){
  this.el.nativeElement.querySelector("span").innerHTML = "Hello!";
  console.log("hovered");
}

}
