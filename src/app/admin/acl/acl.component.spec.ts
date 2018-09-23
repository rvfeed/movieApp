import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AclComponent } from './acl.component';
import { FormsModule } from '@angular/forms';
import { AclService } from '../services/acl.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, StoreModule } from '@ngrx/store';
import {aclReducer} from '../store/reducer';
import { EffectsModule, Actions } from '@ngrx/effects';
import { AclEffects } from '../store/effects';
describe('AclComponent', () => {
  let component: AclComponent;
  let fixture: ComponentFixture<AclComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AclComponent ],
      providers:[AclService, Store, Actions], 
      imports: [FormsModule, HttpClientTestingModule, 
        StoreModule.forRoot({}), 
        EffectsModule.forRoot([]),
        StoreModule.forFeature('aclFeature',{acl:aclReducer}),
        EffectsModule.forFeature([AclEffects])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
