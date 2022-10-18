import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  //para este caso vamos a tomar todo lo que esta en app.component.html y lo vamos a traer aqui, tambien lo que esta en app.component.ts
  // por lo que todo lo que está en el otro archivo va a estar comentado
  template: `
    <h1> {{ titulo }} </h1>
    <h3>La base es: <strong> {{ base }} </strong></h3>
    <button (click)="acumular( base )"> + {{ base }} </button>

    <span> {{ contador }} </span>

    <button (click)="acumular( -base )"> - {{ base }} </button>
  `
})

export class ContadorComponent { // con export decimos que lo queremos utilizar desde otro archivo
  public titulo: string = 'Contador app';
  contador: number = 10;

  // crear una propiedad de nombre base inicializada en 5, que modifique el acumular tambien segun el valor de la base
  base: number = 5;

  acumular( valor: number ) {
    // con el this. puedo hacer referencia a la propiedad de la clase
    // entonces la puedo manipular directamente
    this.contador += valor;
  }
}




