import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { WallComponent } from './wall/wall.component';
import {StoreModule } from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import { HttpClientModule} from '@angular/common/http'
import {DbModal} from './services/app.mongodb';
import {CommentComponent} from './comment/comment.component';
import { WindowRef } from './app.windowref';
import { PostComponent} from './post/post.component'
const routes: Routes = [
  { path: 'post', component: PostComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
  providers: [DbModal, WindowRef],
  declarations: [WallComponent, CommentComponent, PostComponent]
})
export class WallModule { }
