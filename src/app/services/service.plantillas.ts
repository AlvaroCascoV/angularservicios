import { Injectable } from '@angular/core';
import { Plantilla } from '../models/plantilla';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ServicePlantillas {
  constructor(private _http: HttpClient) {}

  getFunciones(): Observable<Array<string>> {
    let request = '/api/Plantilla/Funciones';
    let url = environment.urlApiPlantillas + request;
    //DENTRO DE HTTPGET PODEMOS INDICAR EL TIPO DE OBJETO A DEVOLVER MEDIANTE DIAMONDS "<>"
    return this._http.get<Array<string>>(url);
  }

  getPlantillaFuncion(funcion: string): Promise<Array<Plantilla>> {
    let request = '/api/Plantilla/PlantillaFuncion/' + funcion;
    let url = environment.urlApiPlantillas + request;
    const plantilla = fetch(url).then((response) => response.json());
    return plantilla;
  }
}
