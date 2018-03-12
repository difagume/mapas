import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Para uso de mapas
import { AgmCoreModule } from '@agm/core';

// Servicios
import { MapaService } from './services/mapa.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOMj04354r1aUb0cocr9xxcYhx0pFkpo4'
    })
  ],
  providers: [MapaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
