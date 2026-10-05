import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  menu = [
    { label: 'HOME', path: '/' },
    { label: 'INVENTARIO', path: '/inventario' },
    { label: 'FACTURACIÓN', path: '/facturacion' },
    { label: 'PROVEEDORES', path: '/proveedores' },
    { label: 'NÓMINA', path: '/nomina' },
    { label: 'REPORTES', path: '/reportes' },
    { label: 'AUDITORÍA', path: '/auditoria' },
    { label: 'USUARIOS', path: '/usuarios' },
  ];
}
