import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [RouterLink],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  mostrandoFormulario = signal(false);

  nuevoUsuario() {
    this.mostrandoFormulario.set(true);
  }

  volver() {
    this.mostrandoFormulario.set(false);
  }
}
