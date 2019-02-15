import { Component, Input } from '@angular/core';
import { BlogPost } from '../../../services/models/BlogPost';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {

  @Input() postData: BlogPost;

  constructor() { }
}
