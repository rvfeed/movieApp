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
    this.dynamicTabs.forEach( tab =>  tab.active = false);
    this.tabs.toArray().forEach( tab =>  tab.active = false);
    tab.active = true;
    this.currentTab = tab;
  }
  openTab(title: string, template, data, isCloseable = false) {
     let comp = this.comc.resolveComponentFactory(TabComponent);
      console.log(this.dynamicTabPlaceholder)
      let comRef = this.dynamicTabPlaceholder.viewContainer;
      let comRef1 = comRef.createComponent(comp);
      let instance : TabComponent = comRef1.instance as TabComponent;
      instance.title = title;
      console.log(instance)
        instance.template = template;
        instance.dataContext = data;
        instance.isCloseable = isCloseable;
        this.dynamicTabs.push(comRef1.instance as TabComponent);
    
    // set it active
    this.selectTab(this.dynamicTabs[this.dynamicTabs.length - 1]);
   
  }
    closeTab(tab: TabComponent) {
    for(let i=0; i<this.dynamicTabs.length;i++) {
      if(this.dynamicTabs[i] === tab) {
        // remove the tab from our array
        this.dynamicTabs.splice(i,1);
        
        // destroy our dynamically created component again
        let viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
        // let viewContainerRef = this.dynamicTabPlaceholder;
        viewContainerRef.remove(i);
        
        // set tab index to 1st one
        if(this.dynamicTabs.length)
            this.selectTab(this.dynamicTabs[this.dynamicTabs.length-1]);
          else
            this.selectTab(this.tabs.first);
        break;
      }
    }
  }
  
  closeActiveTab() {
    let activeTabs = this.dynamicTabs.filter((tab)=>tab.active);
    if(activeTabs.length > 0)  {
      // close the 1st active tab (should only be one at a time)
      this.closeTab(activeTabs[0]);
    }
  }

}
