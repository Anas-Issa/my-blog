import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
 /**
  *
  */
 post:any;
 postSimilarArray:any[]=[];
 constructor(private postSrvice:PostService,private route:ActivatedRoute) {
  
  
 }
  ngOnInit(): void {
    this.route.params.subscribe(val=>{
      this.postSrvice.countViws(val['id'])
  this.postSrvice.loadOnePost(val['id'])
    .subscribe(post=>{

      this.post=post;
      this.loadSimilarPosts(this.post.category.categoryId);
      console.log("postt",this.post);
    })
    })
  
  }
  loadSimilarPosts(catId:any){
    this.postSrvice.loadSimilar(catId)
    .subscribe(res=>{
      this.postSimilarArray=res;
    })
  }
}
