import { Component } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signUp(): void {
    this.authService.signUp();
    this.router.navigate(['/']);
  }
}
