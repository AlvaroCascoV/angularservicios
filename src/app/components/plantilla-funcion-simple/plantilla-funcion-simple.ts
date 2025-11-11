import { Component } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantilla-funcion-simple',
  standalone: false,
  templateUrl: './plantilla-funcion-simple.html',
  styleUrl: './plantilla-funcion-simple.css',
})
export class PlantillaFuncionSimple {
  public funciones!: Array<string>;
  public plantilla!: Array<Plantilla>;
  constructor(private _service: ServicePlantillas) {}

  ngOnInit(): void {
    this._service.getFunciones().then((response) => {
      this.funciones = response;
    });
  }

  getPlantillaFunciones(funcion: string) {
    this._service.getPlantillaFunciones(funcion).then((response) => {
      this.plantilla = response;
    });
  }
}
