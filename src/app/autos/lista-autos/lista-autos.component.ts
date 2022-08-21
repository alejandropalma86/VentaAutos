import { Component } from "@angular/core";

@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent {
  tituloListaAutos: string = "Lista de Autos";

  arregloAutos: string[] = [];
}
