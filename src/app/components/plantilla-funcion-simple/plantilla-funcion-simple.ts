import { Component, OnInit } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple',
  standalone: false,
  templateUrl: './plantilla-funcion-simple.html',
  styleUrl: './plantilla-funcion-simple.css',
})
export class PlantillaFuncionSimple implements OnInit {
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;

  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }

  getPlantillaFuncion(funcion: string) {
    this._service.getPlantillaFuncion(funcion).then((response) => {
      this.plantilla = response;
    });
  }
}
