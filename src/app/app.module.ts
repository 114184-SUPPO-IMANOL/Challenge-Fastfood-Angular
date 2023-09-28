import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { POSComponent } from './pos/pos.component';
import { CocinaComponent } from './cocina/cocina.component';
import { PuntoDeEntregaComponent } from './punto-de-entrega/punto-de-entrega.component';

@NgModule({
  declarations: [
    AppComponent,
    RestauranteComponent,
    POSComponent,
    CocinaComponent,
    PuntoDeEntregaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
