import { Component } from "@angular/core";

@Component({
  selector: 'app-heore', // este puede suer cualquier nombre, usualmnete es el mismo nombre del componente sin la palabra compnent
  templateUrl: 'heroe.component.html' // hace referencia al archivo html
})

export class HeroeComponent {
  nombre: string = 'Iron Man';
  edad: number = 45;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${ this.nombre } - ${this.edad}`; // interpolación de javascript
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 24;
  }
}
