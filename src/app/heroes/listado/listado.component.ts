import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor', 'Capitan America'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    // shift elimina el primero y lo retorna
    // pop eliminar el ultimo y devuelve el elemento
    // mi tarea
    // const heroeBorrado = this.heroes.shift();
    // this.heroeBorrado = heroeBorrado;

    // forma de una linea
    // lectura: este heroeBorrado quitame elimina el primero y luego asignalo a la propiedad heroeBorrado,
    // retorna '...'
    this.heroeBorrado = this.heroes.shift() || ''; 
  }
}
