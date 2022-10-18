import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // este es el nombre de este componente
  // templateUrl: 'app.component.html' // este hace referencia al archivo html
  templateUrl: 'app.component.html'
})

// lo ideal es que el .ts tenga toda la logica y en el html solo se visualice

export class AppComponent { // esto es una instancia del AppComponent
  // como son variables se les puede entregar el tipo de dato y el nivel de accesos
  // por defecto es publico por lo que es descision de uno colocarlo
  // public titulo: string = 'Contador app';
  // contador: number = 10;

  // crear una propiedad de nombre base inicializada en 5, que modifique el acumular tambien segun el valor de la base
  // base: number = 5;

  // acumular( valor: number ) {
  //   // con el this. puedo hacer referencia a la propiedad de la clase
  //   // entonces la puedo manipular directamente
  //   this.contador += valor;
  // }
}
