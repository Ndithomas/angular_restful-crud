import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { Post } from '../app/post/post';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  posts: Post[] = [];

  

  constructor(public postService: PostService) { }

  

  ngOnInit(): void {

    this.postService.getPosts().subscribe((data: Post[])=>{

      this.posts = data;

      console.log(this.posts);

    })  

  }

  deletePost(id:number){

    this.postService.delete(id).subscribe(res => {

         this.posts = this.posts.filter(item => item.id !== id);

         console.log('Post deleted successfully!');

    })

  }
}
