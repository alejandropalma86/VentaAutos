import { Component, OnInit } from "@angular/core";

@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Autos";

  listaAutos: Auto[] = [];
  muestraImagen: boolean = false;
  filtro: string = "";

  ngOnInit(): void {
    this.listaAutos = [...];
  }

  toogleImage(): void {
    this.muestraImagen = !this.muestraImagen;
  }


}
