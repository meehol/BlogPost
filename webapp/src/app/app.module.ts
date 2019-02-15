import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogPostComponent } from './components/view/blog-post/blog-post.component';
import { CreateBlogEntryComponent } from './components/view/create-blog-entry/create-blog-entry.component';
import { BlogPostListComponent } from './components/view/blog-post-list/blog-post-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    CreateBlogEntryComponent,
    BlogPostListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
