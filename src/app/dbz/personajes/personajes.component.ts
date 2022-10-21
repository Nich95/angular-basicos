import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/debz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  // con el decorador "@Input" le decimos que van a venir del componente padre
  // lo que esta en las '' reemplaza el nombre de "personajes"
  // @Input('data') personajes :any[] = [];
  @Input() personajes: Personaje[] = [];

  constructor( private dbzService: DbzService ) {}
}
