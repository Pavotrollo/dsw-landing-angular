import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',
  imports: [],
  templateUrl: './perfil-screen.html',
  styleUrl: './perfil-screen.scss'
})
export class PerfilScreen {
  perfil = {
    nombre: 'Pavel Alarcon',
    email: 'pavel.alarcon.miranda@gmail.com',
    telefono: '7472735304',
    direccion: 'Puebla, México',
    nacimiento: '06/12/2006'
  };
}