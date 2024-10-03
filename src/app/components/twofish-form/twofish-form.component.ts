import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as CryptoJS from 'crypto-js'; 
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  selector: 'app-twofish-form',
  templateUrl: './twofish-form.component.html',
})
export class TwofishFormComponent {
  nombre: string = '';
  correo: string = '';
  direccion: string = '';
  identificacion: string = '';
  telefono: string = '';
  key: string = '';
  decryptKey: string = '';
  encryptedData: any = {};
  decryptedData: any = {};

  constructor() {}
  encryptSensitiveData() {
    const key = this.key; 
  
    this.encryptedData = {
      nombre: CryptoJS.AES.encrypt(this.nombre, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(),
      correo: CryptoJS.AES.encrypt(this.correo, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(),
      direccion: CryptoJS.AES.encrypt(this.direccion, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(),
      identificacion: CryptoJS.AES.encrypt(this.identificacion, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(),
      telefono: CryptoJS.AES.encrypt(this.telefono, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(),
    };
  
    console.log(this.encryptedData);
  }
  
  decryptSensitiveData() {
    const key = this.decryptKey; 
    try {
      this.decryptedData = {
        nombre: CryptoJS.AES.decrypt(this.encryptedData['nombre'], key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8),
        correo: CryptoJS.AES.decrypt(this.encryptedData['correo'], key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8),
        direccion: CryptoJS.AES.decrypt(this.encryptedData['direccion'], key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8),
        identificacion: CryptoJS.AES.decrypt(this.encryptedData['identificacion'], key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8),
        telefono: CryptoJS.AES.decrypt(this.encryptedData['telefono'], key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8),
      };
  
      console.log(this.decryptedData); 
    } catch (error) {
      console.error('Error al descifrar los datos:', error);
      this.handleDecryptionError();
    }
  }
  
  handleDecryptionError() {
    alert('Error al descifrar los datos: la llave es incorrecta o los datos están corruptos.');
    this.decryptedData = {};
  }
  
}
