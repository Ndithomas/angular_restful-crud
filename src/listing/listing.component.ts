import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Post } from '../app/post/post';
@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent implements OnInit{
  posts:Post[]=[];


  constructor(public postService:PostService){
  
  }
  ngOnInit(): void {
    this.postService.getPosts().subscribe((data:Post[])=>{
  this.posts=data;
  console.log(this.posts);
    })
  }

}
