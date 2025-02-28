import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home';
import { AboutComponent } from './pages/about';
import { ProjectsComponent } from './pages/projects';
import { ServicesComponent } from './pages/services';
import { ContactComponent } from './pages/contact';
import { PostsComponent } from './pages/posts';
import { PostComponent } from './pages/post';
import { SignInComponent } from './pages/sign-in';
import { SignUpComponent } from './pages/sign-up';
import { AuthGuard } from './core/auth/guards/auth.guard';
import { AmityComponent } from './pages/amity';
import { NotFoundComponent } from './shared/components/not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'amity',
    component: AmityComponent,
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
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
    canActivate: [AuthGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
