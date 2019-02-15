import {Component, Input, OnInit} from '@angular/core';
import { BlogPostDataService } from '../../../services/blog-post-data.service';
import { BlogPost } from '../../../services/models/BlogPost';

@Component({
  selector: 'app-create-blog-entry',
  templateUrl: './create-blog-entry.component.html',
  styleUrls: ['./create-blog-entry.component.scss']
})
export class CreateBlogEntryComponent implements OnInit {

  isLoading: boolean = false;
  newPost: string = '';

  @Input() sibling;

  constructor(
    private blogPostDataService: BlogPostDataService,
  ) { }

  ngOnInit() {
  }

  sendNewPost() {
    this.isLoading = true;
    this.blogPostDataService.createNewPost(new BlogPost(this.newPost)).subscribe(() => {
      this.isLoading = false;
      this.sibling.fetchPosts();
    });

  }

}
