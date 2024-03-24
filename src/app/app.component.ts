import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyPipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageBtnComponent } from './components/image-btn/image-btn.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, ImageBtnComponent, UpperCasePipe, CurrencyPipe, PercentPipe]
})
export class AppComponent {
  products = [
    {
      productId: 1,
      company:'Sneaker Company',
      title:'Fall Limited Edition Sneakers',
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250,
      discountPercent: 0.5,
      quantity: 0,
      images:[
        {
          id: 1,
          image: "../assets/images/image-product-1.jpg",
          thumbnail: "../assets/images/image-product-1-thumbnail.jpg"
        },
        {
          id: 2,
          image: "../assets/images/image-product-2.jpg",
          thumbnail: "../assets/images/image-product-2-thumbnail.jpg"
        },
        {
          id: 3,
          image: "../assets/images/image-product-3.jpg",
          thumbnail: "../assets/images/image-product-3-thumbnail.jpg"
        },
        {
          id: 4,
          image: "../assets/images/image-product-4.jpg",
          thumbnail: "../assets/images/image-product-4-thumbnail.jpg"
        }
      ]
    },
  ]
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
    if(this.cartProducts.includes(productId)) return
    this.cartProducts = [...this.cartProducts, productId]
  }
}
