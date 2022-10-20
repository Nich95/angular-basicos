import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = { // esto es un objeto de tipo Personaje
    nombre: '',
    poder: 0
  }

  // @Output sirve para emitir eventos
  // se pueden emitir de todos los tipso de datos,
  // para este caso va a estar emitiendo Personaje
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  cambiarNombre( event: any ) {
    console.log( event.target.value() );
  }

  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; } // esto hace que se salga de este bloque de código 
    
    //esto lo acepta porque this.nuevo es de tipo personaje 
    this.onNuevoPersonaje.emit(this.nuevo);

    // a tener en cuenta: el this.nuevo se esta utilizando para inicializar el formulario,
    // tambien toma los valores del formulario gracias al ngModel por lo que insertamos el this.nuevo
    // this.personajes.push( this.nuevo ); // porque ya no se va a usar asi
    this.nuevo = { nombre: '', poder: 0 }; // le damos los valores iniciales del objeto
  }


}
