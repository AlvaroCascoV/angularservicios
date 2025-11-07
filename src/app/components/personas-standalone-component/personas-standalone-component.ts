import { Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personas-standalone-component',
  standalone: true,
  templateUrl: './personas-standalone-component.html',
  styleUrl: './personas-standalone-component.css',
  imports: [CommonModule],
})
export class PersonasStandaloneComponent {
  public personas!: Array<Persona>;
  constructor() {
    this.personas = new Array<Persona>();
    let p1 = new Persona(1, 'A', 'A', 22);
    this.personas.push(p1);
    let p2 = new Persona(2, 'B', 'B', 32);
    this.personas.push(p2);
  }
}
