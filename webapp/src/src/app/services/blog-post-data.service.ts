import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {BlogPost} from './models/BlogPost';

@Injectable({
  providedIn: 'root'
})
export class BlogPostDataService {

  constructor(
    private httpService: HttpService,
  ) { }

  public getBlogPosts(sorts: string[]) {
    return this.httpService.get<BlogPost[]>(`blogposts?sorts=${sorts.join(',')}`);
  }

  public createNewPost(newPost: BlogPost) {
    return this.httpService.post<any>('blogposts', newPost);
  }

}
