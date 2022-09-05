
import { Injectable } from "@angular/core";
import { Auto } from "../datos/auto";

@Injectable({
    providedIn: "root"
    })

export class AutosService{
  listaAutos: Auto[] = [];
    

    listaAutosService() {
        return [
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
              }
        ];
    }

    public obtenAuto( id: number ): Auto {
      this.listaAutos= this.listaAutosService();
      return this.listaAutos.find(  ( auto: Auto ) => auto.id === id )!;
      }
}
