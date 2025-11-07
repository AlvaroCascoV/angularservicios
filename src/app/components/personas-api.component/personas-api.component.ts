import { Component, OnInit } from '@angular/core';
import { ServicePersonas } from '../../services/service.personas';
import { Persona } from '../../models/persona';

@Component({
  selector: 'app-personas-api',
  standalone: false,
  templateUrl: './personas-api.component.html',
  styleUrl: './personas-api.component.css',
})
export class PersonasApiComponent implements OnInit {
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas) {}
  ngOnInit(): void {
    // this._service.getPersonas().subscribe((response) => {
    //   console.log('Leyendo');
    //   this.personas = response;
    // });

    this._service.getPersonasPromise().then((response) => {
      console.log('Leyendo');
      this.personas = response;
    });
  }
}
