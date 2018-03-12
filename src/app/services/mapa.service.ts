import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';

@Injectable()
export class MapaService {

  marcadores: Marcador[] = [];

  constructor() {
    let nuevoMarcador: Marcador = {
      lat: -0.0777478,
      lng: -78.469511,
      titulo: 'La Jose',
      draggable: true
    };

    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
    this.guardarMarcadores();
  }

  borrarMarcador(i: number) {
    this.marcadores.splice(i, 1);
    this.guardarMarcadores();
  }

  guardarMarcadores() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  cargarMarcadores() {
    if (localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    } else {
      this.marcadores = [];
    }
  }

}
