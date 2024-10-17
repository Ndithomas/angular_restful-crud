import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostService } from '../services/post.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-creating-resource',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './creating-resource.component.html',
  styleUrl: './creating-resource.component.scss'
})
export class CreatingResourceComponent implements OnInit {
  
  postForm!: FormGroup;
  successMessage: string | undefined;
  constructor(public postService: PostService
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required),
      userId: new FormControl('', [Validators.required,Validators.min(1)])
    });
  }
get f(){
  return this.postForm.controls;
}
 submit(){
    console.log(this.postForm.value);
    this.postService.createPost(this.postForm.value).subscribe(res=>{
      console.log('Post created successfully!');
      this.successMessage = 'Post Created Successfull!.';
    })

}
}