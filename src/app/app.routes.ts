import { Routes, CanActivateChildFn } from '@angular/router';
import { HomeLayout } from './layout/home-layout/home-layout';
import { SignedLoayout } from './layout/signed-loayout/signed-loayout';
import { authGuard } from './core/guards/active/auth-guard';
import { authChiledGuard } from './core/guards/ActivateChild/auth-chiled-guard';

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
        path: "signed",
        component: SignedLoayout,
        children: [{
            path: '',
            loadComponent: () => import('./pages/home/home').then(m => m.Home)
        },
        {
            path: "savedJsobs",
            loadComponent: () =>import("./pages/saved-jobs/saved-jobs").then(m => m.SavedJobs)
        },
        {
            path: "applications",
            loadComponent: () =>import("./pages/application-page/application-page").then(m => m.ApplicationPage)
        },
        ],
        canActivate: [authGuard],
        canActivateChild: [authChiledGuard]
    },
    // {
    //     path:"**",
    //     loadComponent: () =>import("./pages/not-found/not-found").then(m => m.NotFound)
    // },    
    {
        path: "login",
        loadComponent: () => import("./pages/log-in/log-in").then(m => m.LogIN),
    },
    {
        path: "signup",
        loadComponent: () => import("./pages/sign-up/sign-up").then(m => m.SignUp)
    }
];
