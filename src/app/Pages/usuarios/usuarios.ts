import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Usuario {
  documento: string;
  nombres: string;
  apellidos: string;
  correo: string;
  rol: string;
  activo: boolean;
}

@Component({
  selector: 'app-usuarios',
  imports: [RouterLink, FormsModule],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  mostrandoFormulario = signal(false);
  usuarioEditando = signal<Usuario | null>(null);
  confirmandoEliminar = signal(false);
  error = signal('');

  roles = ['Gerente', 'Auxiliar', 'Vendedor'];
  nuevo: Usuario = this.usuarioVacio();

  usuarios = signal<Usuario[]>([
    {
      documento: '1000123456',
      nombres: 'Laura',
      apellidos: 'Gómez',
      correo: 'laura@gmail.com',
      rol: 'Gerente',
      activo: true,
    },
    {
      documento: '1000234567',
      nombres: 'Daniela',
      apellidos: 'Pérez',
      correo: 'daniela@gmail.com',
      rol: 'Vendedor',
      activo: true,
    },
    {
      documento: '1000345678',
      nombres: 'Mariana',
      apellidos: 'López',
      correo: 'mariana@gmail.com',
      rol: 'Auxiliar',
      activo: false,
    },
  ]);

  usuarioVacio(): Usuario {
    return { documento: '', nombres: '', apellidos: '', correo: '', rol: '', activo: true };
  }

  nuevoUsuario() {
    this.error.set('');
    this.mostrandoFormulario.set(true);
  }

  volver() {
    this.nuevo = this.usuarioVacio();
    this.error.set('');
    this.mostrandoFormulario.set(false);
  }

  validar(usuario: Usuario, esNuevo: boolean) {
    if (!usuario.documento.trim() || !usuario.nombres.trim() || !usuario.apellidos.trim()) {
      return 'Completa el documento, los nombres y los apellidos.';
    }
    if (!usuario.correo.includes('@')) {
      return 'Escribe un correo válido.';
    }
    if (!usuario.rol) {
      return 'Selecciona un rol.';
    }
    if (esNuevo && this.usuarios().some(u => u.documento === usuario.documento.trim())) {
      return 'Ya existe un usuario con ese documento.';
    }
    return '';
  }

  crearUsuario() {
    const mensaje = this.validar(this.nuevo, true);
    if (mensaje) {
      this.error.set(mensaje);
      return;
    }

    this.usuarios.update(lista => [...lista, { ...this.nuevo, documento: this.nuevo.documento.trim() }]);
    this.volver();
  }

  editar(usuario: Usuario) {
    this.error.set('');
    this.confirmandoEliminar.set(false);
    this.usuarioEditando.set({ ...usuario });
  }

  @HostListener('document:keydown.escape')
  cerrarEditor() {
    this.usuarioEditando.set(null);
    this.confirmandoEliminar.set(false);
    this.error.set('');
  }

  guardarCambios() {
    const editado = this.usuarioEditando();
    if (!editado) return;

    const mensaje = this.validar(editado, false);
    if (mensaje) {
      this.error.set(mensaje);
      return;
    }

    this.usuarios.update(lista => lista.map(u => (u.documento === editado.documento ? editado : u)));
    this.cerrarEditor();
  }

  cambiarEstado(usuario: Usuario) {
    this.usuarios.update(lista =>
      lista.map(u => (u.documento === usuario.documento ? { ...u, activo: !u.activo } : u)),
    );
  }

  eliminarUsuario() {
    const editado = this.usuarioEditando();
    if (!editado) return;

    if (!this.confirmandoEliminar()) {
      this.confirmandoEliminar.set(true);
      return;
    }

    this.usuarios.update(lista => lista.filter(u => u.documento !== editado.documento));
    this.cerrarEditor();
  }
}
