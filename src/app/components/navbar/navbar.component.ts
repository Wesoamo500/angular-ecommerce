import { Component, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartService = inject(CartService);
  authService = inject(AuthService);
  numberOf(){
    return this.cartService.numberOfProducts
  }
  checkAuth() {
    return this.authService.checkAuth()
  }
}
