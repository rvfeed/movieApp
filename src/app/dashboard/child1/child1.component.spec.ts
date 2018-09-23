import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Child1Component } from './child1.component';
import { GobackComponent } from '../../form-elements/goback/goback.component';
import { NgcontentComponent } from '../../ngcontent/ngcontent.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Child1Component', () => {
  let component: Child1Component;
  let fixture: ComponentFixture<Child1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Child1Component, GobackComponent, NgcontentComponent ],
      providers: [Location],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Child1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
