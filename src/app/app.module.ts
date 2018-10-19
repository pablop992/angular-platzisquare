import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LugaresComponent } from './lugares/lugares.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { LugaresService } from './services/lugares.service';
import { RoutingModule } from './routing/routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactenosreactiveComponent } from './contactenosreactive/contactenosreactive.component';

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    DetalleComponent,
    ContactenosComponent,
    ContactenosreactiveComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LugaresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
