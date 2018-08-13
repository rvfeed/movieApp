import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { RatingFormComponent } from '../rating-form/rating-form.component';
import { DashboardComponent } from './dashboard.component';
const routes: Routes = [
    {path: 'dahsboard', component: DashboardComponent }
    ]
@NgModule({    
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppDashBoardRoutingModule{
 
}