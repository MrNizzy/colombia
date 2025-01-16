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
      {
        path: 'departments',
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/department/department.page').then(
                (m) => m.DepartmentPage
              ),
            title: 'Departamento',
          },
          {
            path: '',
            loadComponent: () =>
              import('./pages/departments/departments.page').then(
                (m) => m.DepartmentsPage
              ),
            title: 'Departamentos',
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: 'content/home',
    pathMatch: 'full',
  },
];
