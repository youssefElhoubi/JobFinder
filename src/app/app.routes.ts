import { Routes } from '@angular/router';
import { HomeLayout } from './layout/home-layout/home-layout';

export const routes: Routes = [
    {
        path: '',
        component: HomeLayout,
        children: [{
            path: '',
            loadComponent: () => import('./pages/home/home').then(m => m.Home)
        }],
    }
];
