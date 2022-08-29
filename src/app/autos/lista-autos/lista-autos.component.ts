import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from "src/app/datos/auto";

@Component({
  selector: "lista-autos",
  templateUrl: "./lista-autos.component.html"
})
export class ListaAutosComponent implements OnInit {
  tituloListaAutos: string = "Lista de Autos Angular";
  listaAutos: Auto[] = [];
  listaAutosFiltrados: Auto[] = [];
  imageWidth = 150;
  imageMargin = 2;
  muestraImagen: boolean = false;
  faStar = faStar;
  starsList = [];

  private _filtro: string = "";

  get filtro(): string {
    return this._filtro;
  }

/*
  set filtro(filtrarPor: string) {
    filtrarPor = filtrarPor.toLowerCase();
    this.listaAutosFiltrados = this.listaAutos.filter(
      ( auto: Auto) => auto.marca.toLowerCase().includes(filtrarPor)
    )
    console.log(filtrarPor);
  }
*/

set filtro( filtro: string ) {
  this._filtro = filtro;
  this.filtraAutos( filtro );
  }
  filtraAutos( filtrarPor: string ): void {
  filtrarPor = filtrarPor.toLocaleLowerCase();
  this.listaAutosFiltrados = this.listaAutos.filter(
  ( auto: Auto ) => auto.marca.toLocaleLowerCase().includes( filtrarPor )
  )
  }

  constructor() { }

  ngOnInit(): void {
    this.listaAutos = this.llenaAutos();
    this.listaAutosFiltrados = this.listaAutos;
  }

  llenaAutos(): Auto[] {
    let listaAutos: Auto[] = [
      {
        id: 1,
        marca: "Mercedes",
        modelo: "EQS-eléctrico",
        anio: 2021,
        color: "Gris",
        kilometros: 234,
        calificacion: 4.5,
        precio: 2411636,
        imagenUrl: "assets/imagenAutos/1.jpg"
      },

      {
        id: 2,
        marca: "McLaren",
        modelo: "720-S",
        anio: 2022,
        color: "Cromo",
        kilometros: 150,
        calificacion: 5,
        precio: 5755501,
        imagenUrl: "assets/imagenAutos/2.jpg"
      },

      {
        id: 3,
        marca: "Ferrari",
        modelo: "812 GTS",
        anio: 2022,
        color: "Rojo",
        kilometros: 100,
        calificacion: 5,
        precio: 6870122,
        imagenUrl: "assets/imagenAutos/3.jpg"
      },

      {
        id: 4,
        marca: "Lamborghini",
        modelo: "Huracán-Evo",
        anio: 2022,
        color: "Amarillo",
        kilometros: 120,
        calificacion: 5,
        precio: 4376176,
        imagenUrl: "assets/imagenAutos/4.jpg"
      },

      {
        id: 5,
        marca: "Aston Martin",
        modelo: "DB-11",
        anio: 2020,
        color: "Gris ",
        kilometros: 200,
        calificacion: 3.8,
        precio: 4659825,
        imagenUrl: "assets/imagenAutos/5.jpg"
      },
    ];

    return listaAutos;
  }

  muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion( mensaje: string ): void {
    alert( "Dieron click en la calificacion: " + mensaje );
  }

}
