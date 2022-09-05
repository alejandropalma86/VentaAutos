import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AEspacioPipe } from './shared/a-espacio.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EstrellasComponent } from './shared/estrellas/estrellas.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { ListaAutosComponent } from './lista-autos/lista-autos.component';
import { DetalleAutosComponent } from './detalle-autos/detalle-autos.component';

@NgModule({
  declarations: [
    AppComponent,
    AEspacioPipe,
    EstrellasComponent,
    HomeComponent,
    ClientesComponent,
    ListaAutosComponent,
    DetalleAutosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
