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
      {
        path: 'regions',
        loadComponent: () =>
          import('./pages/regions/regions.page').then((m) => m.RegionsPage),
        title: 'Regiones',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'content/home',
    pathMatch: 'full',
  },
  {
    path: 'regions',
    loadComponent: () =>
      import('./pages/regions/regions.page').then((m) => m.RegionsPage),
  },
];
