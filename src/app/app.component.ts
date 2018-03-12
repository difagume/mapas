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

  marcadorSel: any = null;
  draggable: string = "1";

  constructor(public _ms: MapaService) {
    this._ms.cargarMarcadores();
  }

  clickMapa(evento) {
    console.log('evento: ', evento);

    let nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin título',
      draggable: true
    };

    this._ms.insertarMarcador(nuevoMarcador);
  }

  clickMarcador(marcador: Marcador, i: number) {
    console.log(marcador, i);
    this.marcadorSel = marcador;
    if (this.marcadorSel.draggable) {
      this.draggable = '1';
    } else {
      this.draggable = '0';
    }
  }

  dragEndMarcador(marcador: Marcador, evento) {
    // console.log(marcador, evento);
    marcador.lat = evento.coords.lat;
    marcador.lng = evento.coords.lng;

    this._ms.guardarMarcadores();
  }

  cambiarDraggable() {
    if (this.draggable === '1') {
      this.marcadorSel.draggable = true;
    } else {
      this.marcadorSel.draggable = false;
    }
  }
}
