import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RoutingModule } from './routing/routing.module';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { LugaresService } from './services/lugares.service';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetalleComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
