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
      {
        path: 'cities',
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/city/city.page').then((m) => m.CityPage),
            title: 'Ciudad',
          },
          {
            path: '',
            loadComponent: () =>
              import('./pages/cities/cities.page').then((m) => m.CitiesPage),
            title: 'Ciudades',
          },
        ],
      },
      {
        path: 'presidents',
        children: [
          {
            path: ':id',
            loadComponent: () =>
              import('./pages/president/president.page').then(
                (m) => m.PresidentPage
              ),
            title: 'Presidente',
          },
          {
            path: '',
            loadComponent: () =>
              import('./pages/presidents/presidents.page').then(
                (m) => m.PresidentsPage
              ),
            title: 'Presidentes',
          },
        ],
      },
      {
        path: 'holidays',
        loadComponent: () =>
          import('./pages/holidays/holidays.page').then((m) => m.HolidaysPage),
        title: 'Festivos',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'content/home',
    pathMatch: 'full',
  },
];
