import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-facturacion',
  imports: [RouterLink],
  templateUrl: './facturacion.html',
  styleUrl: './facturacion.css',
})
export class Facturacion {
  mostrandoFormulario = signal(false);

  nuevaFactura() {
    this.mostrandoFormulario.set(true);
  }

  volver() {
    this.mostrandoFormulario.set(false);
  }
}
