import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from '../home/home.component';
import { ListaAutosComponent } from '../lista-autos/lista-autos.component';
import { ClientesComponent} from '../clientes/clientes.component';
import { DetalleAutosComponent } from '../detalle-autos/detalle-autos.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'lista-autos', component: ListaAutosComponent },
	{ path: 'lista-autos/:id', component: DetalleAutosComponent },
	{ path: 'clientes', component: ClientesComponent },
	{ path: '**', component: HomeComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
