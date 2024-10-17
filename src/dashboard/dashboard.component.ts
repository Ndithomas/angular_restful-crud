import { Component, OnInit} from '@angular/core';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  postId: number | null = null;
  post: any = null; 
  errorMessage: string = ''; 
  
  constructor(public postService: PostService  ) {}

  ngOnInit(): void {
    this.getPostById
  }
  getPostById(id: number): void {
    this.postService.getPostById(id).subscribe({
      next: (data) => {
        this.post = data; 
        this.errorMessage = '';
      },
      error: () => {
        this.post = null;
        this.errorMessage = 'Post not found. Please try a different ID.'; 
      }
    });
  }

  searchPost(): void {
    if (this.postId && this.postId > 0) {
      this.getPostById(this.postId); 
    } else {
      this.errorMessage = 'Please enter a valid Post ID'; 
    }
  }
}

