import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../app/post/post';


@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  postId: number = 1; 
  post: Post | undefined;
  errorMessage: string | undefined;
  successMessage: string | undefined;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPost();
  }

  
  getPost() {
    this.postService.getPostById(this.postId).subscribe(
      (response) => {
        this.post = response; 
      },
      (error) => {
        this.errorMessage = error; 
        console.error('Error fetching post:', error);
      }
    );
  }

  
  updatePost() {
    if (this.post) {
     
      const updatedPost: Post = { ...this.post, title: 'Updated Title', body: 'Updated Body' };

      this.postService.updatePosts(updatedPost).subscribe(
        (response) => {
          this.successMessage = 'Post updated successfully!';
          this.post = response; 
          console.log('Post updated successfully!');
        },
        (error) => {
          this.errorMessage = error; 
          console.error('Error updating post:', error);
        }
      );
    } else {
      this.errorMessage = 'No post to update';
    }
}
}