import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escitala',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './escitala.component.html',
  styleUrl: './escitala.component.css'
})

export class EscitalaFormComponent {
  mensaje: string = '';
  clave: number = 2;
  resultado: string = '';
  error: boolean = false;

  validarMensaje(mensaje: string): boolean {
    const regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;
    return regex.test(mensaje);
  }

  cifrarMensaje() {
    if (!this.validarMensaje(this.mensaje)) {
      this.error = true;
      return;
    }
    this.error = false;
    let mensajeSinEspacios = this.mensaje.replace(/\s/g, '');
    const numColumnas = Math.ceil(mensajeSinEspacios.length / this.clave);
    let mensajeCifrado = '';

    for (let c = 0; c < numColumnas; c++) {
      for (let f = c; f < mensajeSinEspacios.length; f += numColumnas) {
        mensajeCifrado += mensajeSinEspacios[f];
      }
    }
    this.resultado = mensajeCifrado;
  }

  descifrarMensaje() {
    if (!this.validarMensaje(this.mensaje)) {
      this.error = true;
      return;
    }
    this.error = false;
    const numColumnas = Math.ceil(this.mensaje.length / this.clave);
    const numFilas = this.clave;
    let mensajeDescifrado = '';

    for (let f = 0; f < numFilas; f++) {
      for (let c = f; c < this.mensaje.length; c += numFilas) {
        mensajeDescifrado += this.mensaje[c];
      }
    }
    this.resultado = mensajeDescifrado;
  }

  copiarResultado() {
    navigator.clipboard.writeText(this.resultado);
  }
}
