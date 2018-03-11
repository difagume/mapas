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
  }

}
