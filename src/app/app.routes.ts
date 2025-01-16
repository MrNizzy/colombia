import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'content',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
        title: 'Inicio',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'content/home',
    pathMatch: 'full',
  },
];
