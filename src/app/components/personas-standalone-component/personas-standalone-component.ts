import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-standalone-component',
  standalone: true,
  templateUrl: './personas-standalone-component.html',
  styleUrl: './personas-standalone-component.css',
  providers: [ServicePersonas],
})
export class PersonasStandaloneComponent {
  public personas!: Array<Persona>;
  constructor(private _service: ServicePersonas) {}
  ngOnInit(): void {
    this._service.getPersonasPromise().then((response) => {
      console.log('Leyendo');
      this.personas = response;
    });
  }
}
