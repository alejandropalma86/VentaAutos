import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto } from '../datos/auto';
import { AutosService } from '../shared/autos.services';
import { faCartShopping, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detalle-autos',
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {
  autos: Auto[] = [];
  auto: any;
  tituloPagina: string = "Detalle del Auto";
  faCartShopping = faCartShopping;
  faChevronLeft = faChevronLeft;

  constructor(private _activatedRoute: ActivatedRoute,
    private _autosService: AutosService,
    private _router: Router,) { }

  ngOnInit(): void {
    this.autos=this._autosService.listaAutosService();
    let id = Number( this._activatedRoute.snapshot.paramMap.get('id') );
    this.auto = this._autosService.obtenAuto(id);
    console.log(this.auto = this._autosService.obtenAuto(id));
    this.tituloPagina += " " + id;
  }


  onBack(): void {
    this._router.navigate([ '/lista-autos' ]);
    }

}
