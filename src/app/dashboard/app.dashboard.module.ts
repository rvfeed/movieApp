import { NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

import { DashboardComponent } from './dashboard.component';
import {AppDashBoardRoutingModule } from './app.dashboard.routing';
import { AppRatingFormModule} from '../rating-form/rating-form.module';
import { NgcontentComponent} from '../ngcontent/ngcontent.component';
import { FormElementsModule} from '../form-elements/form-elements.module';

@NgModule({
    imports: [ CommonModule, FormsModule,AppDashBoardRoutingModule, ReactiveFormsModule, 
    AppRatingFormModule, FormElementsModule],
    declarations: [DashboardComponent, NgcontentComponent, Child1Component, Child2Component, Child3Component],    
    providers: []
})
export class AppDashBoardModule{
    
}