import { Component } from "@angular/core";
import { Router } from '@angular/router';


@Component ({
  selector: "app-root",
  templateUrl: "./app.component.html"
})

export class AppComponent {
  titulo: string = "Venta de Autos"; 
  constructor(private _router: Router,) { }

  goInicio(): void {
    this._router.navigate([ '/home' ]);
    }
}

