import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { AclComponent } from './acl/acl.component';
import {StoreModule } from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import {aclReducer} from './store/reducer';
import { AclEffects } from './store/effects';
import {AclService} from './services/acl.service'
import { HttpClientModule} from '@angular/common/http'
const routes: Routes = [
  { path: 'acl', component: AclComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('aclFeature',{acl:aclReducer}),
    EffectsModule.forFeature([AclEffects])
  ],
  exports: [RouterModule],
  providers: [AclService],
  declarations: [AclComponent]
})
export class AdminModule { }
