import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./Pages/home/home').then(m => m.Home),
  },
  {
    path: 'inventario',
    loadComponent: () =>
      import('./Pages/inventario/inventario').then(m => m.Inventario),
  },
  {
    path: 'facturacion',
    loadComponent: () =>
      import('./Pages/facturacion/facturacion').then(m => m.Facturacion),
  },
  {
    path: 'proveedores',
    loadComponent: () =>
      import('./Pages/proveedores/proveedores').then(m => m.Proveedores),
  },
  {
    path: 'usuarios',
    loadComponent: () =>
      import('./Pages/usuarios/usuarios').then(m => m.Usuarios),
  },
  {
    path: 'nomina',
    loadComponent: () =>
      import('./Pages/nomina/nomina').then(m => m.Nomina),
  },
  {
    path: 'reportes',
    loadComponent: () =>
      import('./Pages/reportes/reportes').then(m => m.Reportes),
  },
  {
    path: 'auditoria',
    loadComponent: () =>
      import('./Pages/auditoria/auditoria').then(m => m.Auditoria),
  },
  { path: '**', redirectTo: 'inventario' },
];
