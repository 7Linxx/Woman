import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  menu = [
    { label: 'HOME', path: '/home' },
    { label: 'INVENTARIO', path: '/inventario' },
    { label: 'FACTURACIÓN', path: '/facturacion' },
    { label: 'PROVEEDORES', path: '/proveedores' },
    { label: 'NÓMINA', path: '/nomina' },
    { label: 'USUARIOS', path: '/usuarios' },
    { label: 'REPORTES', path: '/reportes' },
    { label: 'AUDITORÍA', path: '/auditoria' },
  ];
}
