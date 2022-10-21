import { Injectable } from "@angular/core";

import { Personaje } from '../interfaces/dbz.interface';

// En el servicio va toda la info y los metodos que se utilizan para interactuar con fuentes externas
// para manupular es estado de la información de la app
// se trabaja mucho con solicitudes http donde se llaman los endpoints de las apis
@Injectable()
export class DbzService {

  // por standar las propoiedades privadas se marcan con un guión bajo
  private _personajes: Personaje[] = [ // a tener en cuenta que aqui se agregan objetos
  {
    nombre: 'Goku',
    poder: 15000
  },
  {
    nombre: 'Vegeta',
    poder: 8500
  }
];

// se tiene que tener cuidado con esto porque javascript todo lo manda por referencia
  get personajes(): Personaje[] { // le indicamos que retorna un arreglo de personajes
    // los corchetes indican que es un arreglo
    // "..." es el operador spread que dice
    // "separa cada uno de los elementos del arreglo y crea uno nuevo"
    // con esto rompre la referencia con el arreglo real
    return [...this._personajes]; // esto es una buena constumbre de javascriopt
  }

  constructor() {
    console.log('Servicio inicializado...');
  }
}
