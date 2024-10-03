import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-diffie-hellman-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './diffiehellman-form.component.html',
  styleUrls: ['./diffiehellman-form.component.css']
})
export class DiffieHellmanFormComponent {
  nombre: string = '';
  correo: string = '';
  password: string = '';
  telefono: string = '';

  sharedSecret: string = '';

  encryptedData: any = {};
  decryptedData: any = {};

  constructor() {
    this.generateSecretKey(); 
  }

  generateSecretKey() {
    this.sharedSecret = CryptoJS.lib.WordArray.random(32).toString(CryptoJS.enc.Hex);
    console.log("Clave secreta generada:", this.sharedSecret);
  }

  encryptSensitiveData() {
    const key = this.sharedSecret;

    const dataToEncrypt = {
      nombre: this.nombre,
      correo: this.correo,
      password: this.password,
      telefono: this.telefono
    };

    try {
      this.encryptedData = {
        nombre: CryptoJS.AES.encrypt(dataToEncrypt.nombre, key).toString(),
        correo: CryptoJS.AES.encrypt(dataToEncrypt.correo, key).toString(),
        password: CryptoJS.AES.encrypt(dataToEncrypt.password, key).toString(),
        telefono: CryptoJS.AES.encrypt(dataToEncrypt.telefono, key).toString(),
      };
      console.log("Datos cifrados:", this.encryptedData);
    } catch (error) {
      console.error("Error al cifrar los datos:", error);
    }
  }

  decryptSensitiveData() {
    const key = this.sharedSecret; 

    try {
      this.decryptedData = {
        nombre: CryptoJS.AES.decrypt(this.encryptedData.nombre, key).toString(CryptoJS.enc.Utf8),
        correo: CryptoJS.AES.decrypt(this.encryptedData.correo, key).toString(CryptoJS.enc.Utf8),
        password: CryptoJS.AES.decrypt(this.encryptedData.password, key).toString(CryptoJS.enc.Utf8),
        telefono: CryptoJS.AES.decrypt(this.encryptedData.telefono, key).toString(CryptoJS.enc.Utf8),
      };
      console.log("Datos descifrados:", this.decryptedData);
    } catch (error) {
      console.error("Error al descifrar los datos:", error);
    }
  }
}
