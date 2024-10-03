import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-ripemd-form',
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  standalone: true,
  templateUrl: './ripemd-form.component.html',
  styleUrls: ['./ripemd-form.component.css']
})
export class RIPEMDFormComponent {
  nombre: string = '';
  correo: string = '';
  direccion: string = '';
  identificacion: string = '';
  telefono: string = '';
  selectedVersion: string = 'ripemd160';  

  hashedFields: any = {
    nombre: 'N/A',
    correo: 'N/A',
    identificacion: 'N/A',
    telefono: 'N/A'
  };

  adjustHash(hash: string, version: string): string {
    if (version === 'ripemd128') {
      return hash.slice(0, 32); 
    } else if (version === 'ripemd256') {
      return (hash + hash).slice(0, 64); 
    } else if (version === 'ripemd320') {
      return (hash + hash).slice(0, 80);
    }
    return hash;  
  }

  hashData(data: string, version: string): string {
    if (version === 'ripemd128') {
      return CryptoJS.RIPEMD160(data).toString(CryptoJS.enc.Hex).slice(0, 32);
    } else if (version === 'ripemd256') {
      return CryptoJS.RIPEMD160(data).toString(CryptoJS.enc.Hex).repeat(2).slice(0, 64);
    } else if (version === 'ripemd320') {
      return CryptoJS.RIPEMD160(data).toString(CryptoJS.enc.Hex).repeat(2).slice(0, 80);
    }
    return CryptoJS.RIPEMD160(data).toString(CryptoJS.enc.Hex);  
  }

  onSubmit() {
    this.hashedFields = {
      nombre: this.hashData(this.nombre, this.selectedVersion),
      correo: this.hashData(this.correo, this.selectedVersion),
      identificacion: this.hashData(this.identificacion, this.selectedVersion),
      telefono: this.hashData(this.telefono, this.selectedVersion)
    };
  }
}
