import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("../pages/home/home.page").then(m => m.HomePage)
    },
    {
        path: '**',
       loadComponent: () => import("../pages/dynamic/dynamic.page").then(m => m.DynamicPage)
    }
];