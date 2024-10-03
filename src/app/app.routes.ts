import { Routes } from '@angular/router';
import { RIPEMDFormComponent } from './components/ripemd-form/ripemd-form.component';
import { DiffieHellmanFormComponent } from './components/diffiehellman-form/diffiehellman-form.component';
import { EscitalaFormComponent } from './components/escitala/escitala.component';
import { CesarComponent } from './components/cesar/cesar.component';
import { TwofishFormComponent } from './components/twofish-form/twofish-form.component';
import { ComparacionComponent } from './components/comparacion/comparacion.component';

export const routes: Routes = [
  { path: 'ripemd', component: RIPEMDFormComponent },
  { path: 'diffie-hellman', component: DiffieHellmanFormComponent },
  { path: 'twofish', component: TwofishFormComponent },
  { path: 'escitala', component: EscitalaFormComponent },
  { path: 'cesar', component: CesarComponent },
  { path: 'comparacion', component: ComparacionComponent },
  { path: '', redirectTo: '/cesar', pathMatch: 'full' },  
];
