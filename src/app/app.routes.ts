import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutComponent } from './modules/about/about.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'notfound', component: NotFoundComponent },

    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', redirectTo: '/notfound'},
];
