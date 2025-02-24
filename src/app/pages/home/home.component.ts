import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrderListModule } from 'primeng/orderlist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [CommonModule, OrderListModule],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  product: string[] = ['Geek1', 'Geek2', 'Geek3', 'Geek4'];

  gfg: string[] = ['200'];
}
