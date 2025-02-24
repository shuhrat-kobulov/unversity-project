import { Component, Input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  imports: [RouterLink, RouterModule],
})
export class PostCardComponent {
  @Input() post: any;
}
