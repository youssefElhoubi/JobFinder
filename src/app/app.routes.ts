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
    },
    {
        path:"login",
        loadComponent:()=> import("./pages/log-in/log-in").then(m => m.LogIN),
    },
    {
        path:"signup",
        loadComponent:()=> import("./pages/sign-up/sign-up").then(m=>m.SignUp)
    }
];
