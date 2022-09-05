import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Auto } from "src/app/datos/auto";
import { AutosService } from '../shared/autos.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-autos',
  templateUrl: './lista-autos.component.html',
  styleUrls: ['./lista-autos.component.css']
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

  constructor(private _autosService: AutosService) { }

  ngOnInit(): void {
    this.listaAutos = this._autosService.listaAutosService();
    this.listaAutosFiltrados = this.listaAutos;
  }

  muestraImagenes(): void {
    this.muestraImagen = !this.muestraImagen;
  }

  onClickCalificacion( mensaje: string ): void {
    alert( "Dieron click en la calificacion: " + mensaje );
  }

}
