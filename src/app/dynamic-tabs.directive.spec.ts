import { DynamicTabsDirective } from './dynamic-tabs.directive';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { ViewContainerRef } from '@angular/core';

describe('Dynamic Tabs', () => {
  let directive: DynamicTabsDirective;
  let fixture: ComponentFixture<DynamicTabsDirective>;
let view: ViewContainerRef;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTabsDirective ],
      providers: [ViewContainerRef]
    })
    .compileComponents();
    view = TestBed.get(ViewContainerRef);
  }));
  it('should create an instance', () => {
    
    expect(new DynamicTabsDirective(view)).toBeTruthy();
  });
});
