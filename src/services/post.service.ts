import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Post } from '../app/post/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts/';
  BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  create_Url = 'https://jsonplaceholder.typicode.com/posts';
 updateUrl = 'https://jsonplaceholder.typicode.com/posts';
  delete_Url = 'https://jsonplaceholder.typicode.com/posts/1'
  


  constructor(public http: HttpClient) { }

  public getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${id}`);
  }

  public getPosts(): Observable<any> {
    return this.http.get(this.BASE_URL)
  }
  public createPost(post: Post) {
    return this.http.post<Post>(this.create_Url, post)
  }
  updatePosts(post: Post): Observable<Post> {
    const url = `${this.updateUrl}/${post.id}`; 
    return this.http.put<Post>(url, post)
  }
  public delete(id: number) {
    return this.http.delete(this.apiUrl + id)
  }

}