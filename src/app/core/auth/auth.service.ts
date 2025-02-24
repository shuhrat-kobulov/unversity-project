import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated: WritableSignal<boolean> = signal(false);

  constructor(private router: Router) {}

  signUp(): void {
    localStorage.setItem('token', 'JWT');
    this.authenticated.set(true);
  }

  signIn(): void {
    localStorage.setItem('token', 'JWT');
    this.authenticated.set(true);
  }

  signOut(): void {
    localStorage.removeItem('token');
    this.authenticated.set(false);
    this.router.navigate(['/']);
  }

  isAuthenticated(): boolean {
    return this.authenticated();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
