import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from '../../shared/components/post-card';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from '../../shared/components/not-found';
import { LoaderComponent } from '../../shared/components/loader/loader.component';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-posts',
  standalone: true,
  templateUrl: './posts.component.html',
  imports: [
    CommonModule,
    PostCardComponent,
    FormsModule,
    NotFoundComponent,
    LoaderComponent,
  ],
})
export class PostsComponent implements OnInit {
  isLoading: boolean = true;
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  searchText: string = '';

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(
      (data) => {
        this.isLoading = false;
        this.posts = data;
        this.filteredPosts = data;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  filterPosts() {
    if (!this.searchText) {
      this.filteredPosts = this.posts;
      return;
    }

    const lowerCaseSearchText = this.searchText.toLowerCase();
    this.filteredPosts = this.posts.filter((post) => {
      return post.title.toLowerCase().includes(lowerCaseSearchText);
    });
  }
}
