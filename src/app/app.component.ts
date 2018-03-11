import { Component } from '@angular/core';
import { MapaService } from './services/mapa.service';
import { Marcador } from './interfaces/marcador.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat: number = -0.0777478;
  lng: number = -78.469511;
  zoom: number = 16;

  constructor(public _ms: MapaService) {

  }

  clickMapa(evento) {
    console.log('evento: ', evento);

    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin título',
      draggable: true
    }

    this._ms.insertarMarcador(nuevoMarcador);
  }

}
