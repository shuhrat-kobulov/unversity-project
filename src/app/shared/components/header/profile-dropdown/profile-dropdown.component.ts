import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  imports: [CommonModule],
})
export class ProfileDropdownComponent {
  isOpen = false;

  constructor(private authService: AuthService) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  logout() {
    this.authService.signOut();
  }
}
