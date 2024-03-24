import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path:'collections', component: AppComponent},
    {path: 'men-section', component: AppComponent},
    {path: 'women-section', component: AppComponent},
    {path: 'about', component: AppComponent},
    {path: 'contact', component: AppComponent}
];
