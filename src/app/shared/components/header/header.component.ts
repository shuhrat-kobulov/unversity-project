import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { ProfileDropdownComponent } from './profile-dropdown';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [RouterLink, RouterLinkActive, ProfileDropdownComponent],
})
export class HeaderComponent implements OnInit {
  isAuthenticated: WritableSignal<boolean> = signal(false);

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.authService.isAuthenticated());
    this.isAuthenticated.set(this.authService.isAuthenticated());
  }
}
