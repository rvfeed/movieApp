import { Component, OnInit,
  ContentChild,
  ViewChild,
  ContentChildren,
  QueryList,
  ViewContainerRef,
  ComponentFactoryResolver,
  AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';
import { DynamicTabsDirective } from '../dynamic-tabs.directive';
@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, AfterContentInit {
  dynamicTabs: TabComponent[] = [];
@ContentChildren(TabComponent) tabs : QueryList<TabComponent>;
currentTab: TabComponent;
@ViewChild(DynamicTabsDirective) dynamicTabPlaceholder;
  constructor(private comc : ComponentFactoryResolver) { }
  ngOnInit() {}
  ngAfterContentInit(){
      console.log(this.tabs.filter( tab => true));
      let activeTabs = this.tabs.filter( tab => tab.active);
      if(!activeTabs.length){
        this.selectTab(this.tabs.first)
      }
 
  }
  selectTab(tab: TabComponent){
    console.log("asdfsdfsd");
    this.tabs.forEach( tab =>  tab.active = false);
    tab.active = true;
    this.currentTab = tab;
  }
  openTab(title: string, template, data, isCloseable = false) {
     let comp = this.comc.resolveComponentFactory(TabComponent);
      console.log(this.dynamicTabPlaceholder)
      let comRef = this.dynamicTabPlaceholder.viewContainer.createComponent(comp);
      let instance : TabComponent = comRef.instance as TabComponent;
      instance.title = title;
      console.log(template)
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;
        this.dynamicTabs.push(comRef.instance as TabComponent);
    
    // set it active
  //  this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
   
  }

}
