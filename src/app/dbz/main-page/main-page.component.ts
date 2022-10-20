import { Component } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

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
}
