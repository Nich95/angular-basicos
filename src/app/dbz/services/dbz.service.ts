import { Injectable } from "@angular/core";

// En el servicio va toda la info y los metodos que se utilizan para interactuar con fuentes externas
// para manupular es estado de la información de la app
// se trabaja mucho con solicitudes http donde se llaman los endpoints de las apis
@Injectable()
export class DbzService {

  constructor() {
    console.log('Servicio inicializado...');
  }
}

