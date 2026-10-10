import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Producto {
  nombre: string;
  cantidad: number;
  precio: number;
}

interface Factura {
  codigo: string;
  cliente: string;
  fecha: string;
  vendedor: string;
  estado: 'Pagada' | 'Pendiente';
  productos: Producto[];
}

@Component({
  selector: 'app-facturacion',
  imports: [RouterLink, FormsModule],
  templateUrl: './facturacion.html',
  styleUrl: './facturacion.css',
})
export class Facturacion {
  mostrandoFormulario = signal(false);
  facturaEditando = signal<Factura | null>(null);
  confirmandoEliminar = signal(false);

  vendedores = ['Laura Gómez', 'Daniela Pérez'];
  productosTienda = ['Bolso negro', 'Bolso rojo', 'Billetera'];
  nuevoProducto: Producto = { nombre: '', cantidad: 1, precio: 0 };

  facturas = signal<Factura[]>([
    {
      codigo: 'FAC-001',
      cliente: 'Laura Gómez',
      fecha: '07/10/2026',
      vendedor: 'Daniela Pérez',
      estado: 'Pagada',
      productos: [
        { nombre: 'Bolso negro', cantidad: 1, precio: 120000 },
        { nombre: 'Billetera', cantidad: 1, precio: 30000 },
      ],
    },
    {
      codigo: 'FAC-002',
      cliente: 'Mariana López',
      fecha: '07/10/2026',
      vendedor: 'Laura Gómez',
      estado: 'Pendiente',
      productos: [{ nombre: 'Bolso rojo', cantidad: 1, precio: 85000 }],
    },
    {
      codigo: 'FAC-003',
      cliente: 'Sofía Martínez',
      fecha: '06/10/2026',
      vendedor: 'Daniela Pérez',
      estado: 'Pagada',
      productos: [
        { nombre: 'Bolso rojo', cantidad: 2, precio: 85000 },
        { nombre: 'Billetera', cantidad: 2, precio: 30000 },
      ],
    },
  ]);

  nuevaFactura() {
    this.mostrandoFormulario.set(true);
  }

  volver() {
    this.mostrandoFormulario.set(false);
  }

  total(factura: Factura) {
    return factura.productos.reduce((suma, p) => suma + p.cantidad * p.precio, 0);
  }

  dinero(valor: number) {
    return '$' + valor.toLocaleString('es-CO');
  }

  editar(factura: Factura) {
    this.facturaEditando.set(structuredClone(factura));
    this.confirmandoEliminar.set(false);
    this.nuevoProducto = { nombre: '', cantidad: 1, precio: 0 };
  }

  @HostListener('document:keydown.escape')
  cerrarEditor() {
    this.facturaEditando.set(null);
    this.confirmandoEliminar.set(false);
  }

  agregarProducto() {
    const p = this.nuevoProducto;
    if (!p.nombre || p.cantidad < 1 || p.precio <= 0) return;

    this.facturaEditando.update(f => f && { ...f, productos: [...f.productos, { ...p }] });
    this.nuevoProducto = { nombre: '', cantidad: 1, precio: 0 };
  }

  quitarProducto(posicion: number) {
    this.facturaEditando.update(
      f => f && { ...f, productos: f.productos.filter((_, i) => i !== posicion) },
    );
  }

  guardarCambios() {
    const editada = this.facturaEditando();
    if (!editada || !editada.cliente.trim()) return;

    this.facturas.update(lista =>
      lista.map(f => (f.codigo === editada.codigo ? editada : f)),
    );
    this.cerrarEditor();
  }

  eliminarFactura() {
    const editada = this.facturaEditando();
    if (!editada) return;

    if (!this.confirmandoEliminar()) {
      this.confirmandoEliminar.set(true);
      return;
    }

    this.facturas.update(lista => lista.filter(f => f.codigo !== editada.codigo));
    this.cerrarEditor();
  }
}
