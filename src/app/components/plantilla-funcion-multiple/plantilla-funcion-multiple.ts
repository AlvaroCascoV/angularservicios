import { Component, ViewChild, ElementRef } from '@angular/core';
import { Plantilla } from '../../models/plantilla';
import { ServicePlantillas } from '../../services/service.plantillas';

@Component({
  selector: 'app-plantilla-funcion-multiple',
  standalone: false,
  templateUrl: './plantilla-funcion-multiple.html',
  styleUrl: './plantilla-funcion-multiple.css',
})
export class PlantillaFuncionMultiple {
  public funciones!: Array<string>;
  @ViewChild('selectfunciones') selectFuncionesRef!: ElementRef;
  public funcionesSeleccionadas: Array<string>;
  public plantillas: Array<Plantilla>;

  constructor(private _service: ServicePlantillas) {
    this.plantillas = new Array<Plantilla>();
    this.funcionesSeleccionadas = new Array<string>();
  }

  mostrarPlantilla(): void {
    let aux = new Array<string>();
    for (const option of this.selectFuncionesRef.nativeElement.options) {
      if (option.selected) {
        aux.push(option.value);
      }
    }
    this.funcionesSeleccionadas = aux;
    this._service.getPlantillaFunciones(this.funcionesSeleccionadas).subscribe((response) => {
      this.plantillas = response;
    });
  }

  ngOnInit(): void {
    this._service.getFunciones().subscribe((response) => {
      this.funciones = response;
    });
  }
}
