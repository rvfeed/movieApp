import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
@Input() id: number;
@Input() name: string;
description: string;
@Input('tabTitle') title: string;
  @Input() active = false;
  @Input() isCloseable = false;
  @Input() template;
  @Input() dataContext;
  constructor() { }

  ngOnInit() {
    this.description = `Hello! this is ${name}`;
  }

}
