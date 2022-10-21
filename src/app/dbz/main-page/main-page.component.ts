import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/debz.service';

// aqui van las interfaces en caso las tenga que declarar aca
// interface Personaje {
//   nombre: string;
//   poder: number;
// }

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje[] = [ // a tener en cuenta que aqui se agregan objetos
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje( argumento: Personaje) {
    this.personajes.push(argumento);
  }

  // forma corta de definir propiedades
  // esto se conoce como una injeccion de dependecias
  // como este es el componente padre solo se inicializa una vez y los componentes hjijos utilizan el mismo,
  // al pasar info y modificar el servicio en el padre los hijos trabajan con la misma info
  constructor( private dbzService: DbzService ) {}
}
