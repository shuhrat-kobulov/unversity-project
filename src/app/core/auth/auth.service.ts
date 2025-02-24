import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  signUp(): void {
    localStorage.setItem('token', 'JWT');
  }

  signIn(): void {
    localStorage.setItem('token', 'JWT');
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
