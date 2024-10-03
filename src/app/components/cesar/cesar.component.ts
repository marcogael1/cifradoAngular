import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cesar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cesar.component.html',
  styleUrl: './cesar.component.css'
})
export class CesarComponent {
  mensaje: string = '';
  desplazamiento: number = 0;
  resultado: string = '';
  error: boolean = false;
  mensajeCopia: boolean = false;
  mensajeExito: boolean = false;

  alfabeto: string = 'abcdefghijklmnñopqrstuvwxyz';

  cifrarMensaje() {
    let mensaje = this.mensaje.toLowerCase();
    let resultado = '';
    
    if (/[^a-zñ\s]/.test(mensaje)) {
      this.error = true;
      return;
    } else {
      this.error = false;
    }

    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i];

      if (caracter === ' ') {
        resultado += ' ';
        continue;
      }

      let codigo = mensaje.charCodeAt(i);
      if (caracter !== 'ñ') {
        let codigoCifrado = ((codigo - 97 + this.desplazamiento) % 27) + 97;
        resultado += String.fromCharCode(codigoCifrado);
      } else {
        let codigoCifrado = ((codigo - 97 + this.desplazamiento) % 27) + 241;
        resultado += String.fromCharCode(codigoCifrado);
      }
    }

    this.resultado = resultado;
  }

  descifrarMensaje() {
    let mensaje = this.mensaje.toLowerCase();
    let resultado = '';

    if (/[^a-zñ\s]/.test(mensaje)) {
      this.error = true;
      return;
    } else {
      this.error = false;
    }

    for (let i = 0; i < mensaje.length; i++) {
      let caracter = mensaje[i];

      if (caracter === ' ') {
        resultado += ' ';
        continue;
      }

      let codigo = mensaje.charCodeAt(i);
      if (caracter !== 'ñ') {
        let codigoDescifrado = ((codigo - 97 - this.desplazamiento + 27) % 27) + 97;
        resultado += String.fromCharCode(codigoDescifrado);
      } else {
        let codigoDescifrado = ((codigo - 241 - this.desplazamiento + 27) % 27) + 241;
        resultado += String.fromCharCode(codigoDescifrado);
      }
    }

    this.resultado = resultado;
  }

  copiarTexto() {
    if (this.resultado.trim() === '') {
      this.mensajeCopia = true;
      this.mensajeExito = false;
    } else {
      navigator.clipboard.writeText(this.resultado);
      this.mensajeCopia = false;
      this.mensajeExito = true;
    }
  }
}
