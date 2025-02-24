import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';
import { ProjectsComponent } from './pages/projects';
import { ServicesComponent } from './pages/services';
import { ContactComponent } from './pages/contact';
import { PostsComponent } from './pages/posts';
import { PostComponent } from './pages/post';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'posts/:id',
    component: PostComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];
