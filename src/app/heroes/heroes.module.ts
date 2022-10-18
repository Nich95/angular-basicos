import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core'

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  // aqui definimos los componentes que vamos a utilizar y mientras no se ingrese a esta sección no se van a cargar
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],

  // aqui va lo que quiero hacer visible
  exports: [
    ListadoComponent
  ],

  // aqui van modulos y solo modulos
  imports: [
    // esto es para directivas ej ngFor ngIf
    CommonModule
  ]
})

export class HeroesModule {

}
