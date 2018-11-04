import { NgModule, Input ,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursoComponent } from '../listado-curso/listado-curso.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ ListadoCursoComponent ],

  exports : [ ListadoCursoComponent ]
})
export class CursoModuleModule { 
  
}
