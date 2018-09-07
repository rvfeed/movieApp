import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { WindowRef } from '../app.windowref';
import { DbModal } from "../services/app.mongodb"
import { IPost, Istatus, Comment } from '../interface/app.postInterfaces';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements  OnInit, OnChanges {
  @ViewChild("testref") testrefC: string;
  status: string;
  likes: number;
  delete: boolean;
  comments: IPost[];
  like: boolean = false;
  resultWall: Istatus;
  record: any = {};
  user: string;
  test: any = [];
  @Input() wallpost = {};
  commentsData: Comment;
 @Input("wallpost") wallData: string[]; 
   commentForm: FormGroup = new FormGroup({
 comment: new FormControl("", [Validators.required, Validators.minLength(10)])})
  constructor(private w: WindowRef, private db: DbModal) { }
  ngOnInit() {
   // this.readData();
 //   setTimeout( () => { this.testModel = "Hello";   }, 3000);
  
    this.user = this.w.user;  
    
  }
ngOnChanges(changes: SimpleChanges){
  console.log(changes);
 /* if(changes.wallpost.currentValue && changes.wallpost.currentValue.length){
      this.wallData = changes.wallpost.currentValue;
    this.test = changes.wallpost.currentValue; 
     this.resultWall = changes.wallpost.currentValue;
    //this.refreshWall(this.w.user);
  }*/
}
showComment(){
 // console.log(this.testModel = this.testrefC.nativeElement.value);
}
readData(){
   this.db.readAllPosts()
     .subscribe( (data: any) => {
       this.wallData = data.result;
     })
}


  edit(index: number){ };

  remove(index: number){
    console.log(index);
    this.db.deletePost(index).subscribe( msg => {
      this.readData();
    });    
  };

 add(index: number){
let commentDetails = { comment: this.commentForm.value.comment, date: Date.now(), user: this.user}
   this.db.addComment(index, commentDetails)
   .subscribe(msg => {
     this.readData();
     this.commentForm.reset();
   });
  }
  save(index: number){}

  likeIt(index: number, val){
    console.log(index)
    this.db.likeStatus(index, val)
    .subscribe( (res: Istatus) => {
        this.readData();
     
    })   
  } 

}

