import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-single-catgory',
  templateUrl: './single-catgory.component.html',
  styleUrls: ['./single-catgory.component.css']
})
export class SingleCatgoryComponent implements OnInit {
  /**
   *
   */
  postsArray:any[]=[];
  catgoryObj:any;
  constructor( private route:ActivatedRoute,private postService:PostService) {
    
    
  }
  ngOnInit(): void {
    this.route.params
    .subscribe(val=>{
      this.catgoryObj=val;
      this.postService.loadCategoryPosts(val['id'])
      .subscribe(post=>{
        this.postsArray=post;
      });
    });
  }

}
