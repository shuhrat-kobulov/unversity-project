import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  imports: [CommonModule],
})
export class PostComponent {
  post: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    // Retrieve the post ID from the route parameters
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId) {
      // Fetch the post details using the post ID
      this.postService.getPostById(postId).subscribe(
        (data) => {
          this.post = data;
        },
        (error) => {
          console.error('Error fetching post details:', error);
        }
      );
    }
  }
}
