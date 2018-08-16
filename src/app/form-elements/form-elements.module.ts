import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GobackComponent } from './goback/goback.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GobackComponent],
  exports: [GobackComponent],
  providers:[]
})
export class FormElementsModule { }
