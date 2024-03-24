import { Component, inject } from '@angular/core';
import { CollectionsComponent } from "../collections/collections.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css',
    imports: [CollectionsComponent]
})
export class LandingPageComponent {
}
