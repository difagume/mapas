import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

// Para uso de mapas
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBOMj04354r1aUb0cocr9xxcYhx0pFkpo4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
