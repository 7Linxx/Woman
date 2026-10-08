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
    { label: 'INVENTARIO', path: '/inventario' },
    { label: 'FACTURACIÓN', path: '/facturacion' },
    { label: 'PROVEEDORES', path: '/proveedores' },
    { label: 'NÓMINA', path: '/nomina' },
    { label: 'REPORTES', path: '/reportes' },
    { label: 'AUDITORÍA', path: '/auditoria' },
    { label: 'USUARIOS', path: '/usuarios' },
  ];
}
