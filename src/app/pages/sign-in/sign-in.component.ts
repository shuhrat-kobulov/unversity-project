import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
})
export class SignInComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signIn(): void {
    this.authService.signIn();
    this.router.navigate(['/']);
  }
}
