import { Component, inject } from '@angular/core';
import { CollectionsComponent } from "../collections/collections.component";
import { ProductService } from '../../services/product.service';
import { JsonPipe } from '@angular/common';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [CollectionsComponent, JsonPipe, ProductCardComponent]
})
export class LandingPageComponent {
    productService = inject(ProductService)

    productDescription = this.productService.products[0].description;
    reviews = this.productService.products[0].reviews
    products = this.productService.products!
    active = 'description';
    onToggle(){
        return `${this.active}Style`
    }
    handleToggle(type: string){
        this.active = type;
    }
    reviewStyle(){
        return 'text-[#3e3e3e]'
    }
    descriptionStyle(){
        return 'text-[#ff7900]'
    }
}
