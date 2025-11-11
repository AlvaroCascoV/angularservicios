import { Injectable } from '@angular/core';
import { Plantilla } from '../models/plantilla';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ServicePlantillas {
  getFunciones(): Promise<Array<string>> {
    let request = '/api/Plantilla/Funciones';
    let url = environment.urlApiPlantillas + request;
    const funciones = fetch(url).then((response) => response.json());
    return funciones;
  }

  getPlantillaFunciones(funcion: string): Promise<Array<Plantilla>> {
    let request = '/api/Plantilla/PlantillaFuncion/' + funcion;
    let url = environment.urlApiPlantillas + request;
    const plantilla = fetch(url).then((response) => response.json());
    return plantilla;
  }
}
