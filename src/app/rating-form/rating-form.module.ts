import { NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import {RatingFormComponent} from './rating-form.component'
@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [ RatingFormComponent],
    exports: [RatingFormComponent],
    providers: []
})
export class AppRatingFormModule{
    
}