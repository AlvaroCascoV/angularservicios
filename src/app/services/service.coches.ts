import { Injectable } from '@angular/core';
import { Coche } from '../models/coche';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceCoches {
  constructor(private _http: HttpClient) {}

  getCochesHttpClient(): Observable<any> {
    let request = 'webresources/coches';
    let url = environment + request;
    return this._http.get(url);
  }

  getCoches(): any {
    let request = 'webresources/coches';
    let url = environment.urlApiCoches + request;
    fetch(url).then((response) => {
      return response;
    });
  }

  getCochesPromise(): Promise<any> {
    let request = 'webresources/coches';
    let url = environment.urlApiCoches + request;
    let promise = new Promise((resolve) => {
      fetch(url).then((response) => {
        resolve(response.json());
      });
    });
    return promise;
  }
}
