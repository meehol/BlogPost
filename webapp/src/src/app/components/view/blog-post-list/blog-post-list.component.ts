import { Component, OnInit } from '@angular/core';
import { BlogPostDataService } from '../../../services/blog-post-data.service';
import { BlogPost } from '../../../services/models/BlogPost';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {

  blogPostsList: BlogPost[] = [];
  filters = [
    { label: 'Newest first', value: '-created' },
    { label: 'Oldest first', value: 'created' },
  ];
  selectedFilter = this.filters[0];

  constructor(
    private blogPostDataService: BlogPostDataService,
  ) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    console.log(this.selectedFilter.value);
    this.blogPostDataService.getBlogPosts([this.selectedFilter.value]).subscribe((results) => {
      if (results instanceof HttpErrorResponse) {
        console.error(results);
      } else {
        this.blogPostsList = results;
      }
    });
  }

}
