import { NgModule, Input ,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cursoItem } from '../curso-item/curso-item.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ cursoItem ],

  exports : [ cursoItem ]
})
export class CursoModuleModule { 
  
}
