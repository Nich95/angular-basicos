import { Component } from '@angular/core';

// aqui van las interfaces
interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo: Personaje = { // esto es un objeto de tipo Personaje
    nombre: 'Trunks',
    poder: 14000
  }

  cambiarNombre( event: any ) {
    console.log( event.target.value() );
  }

  agregar(  ) {
    console.log(this.nuevo);
  }
}
