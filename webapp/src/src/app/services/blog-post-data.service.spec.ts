import { TestBed } from '@angular/core/testing';

import { BlogPostDataService } from './blog-post-data.service';

describe('BlogPostDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogPostDataService = TestBed.get(BlogPostDataService);
    expect(service).toBeTruthy();
  });
});
