import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CurrencyPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { ImageBtnComponent } from '../../components/image-btn/image-btn.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Products } from '../../../data/products';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-collections',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ImageBtnComponent, UpperCasePipe, CurrencyPipe, PercentPipe],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.css'
})
export class CollectionsComponent {
  router = inject(Router)
  cartService = inject(CartService)
  authService = inject(AuthService)
  productService = inject(ProductService)
  
  products = this.productService.products
  active = 0;
  isActive = true;
  cartProducts:number[] = []
  handleIsActive(index: number){
    return this.active === index
  }
  hangeProductChange(index: number) {
    this.active = index
  }
  decrease(index:number) {
    this.products.map((product, i)=>{
      if(index === i) product.quantity--
    })
  }
  increase(index:number) {
    this.products.map((product, i)=>{
      if(index === i) product.quantity++
    })
  }
  handleAddToCart(productId: number) {
    if(this.authService.checkAuth()){
      this.router.navigateByUrl('auth/login')
    }
    if(this.cartProducts.includes(productId)) return
    this.cartProducts = [...this.cartProducts, productId]
    this.cartService.updateNumberOfProducts(this.cartProducts.length)
  }
}
