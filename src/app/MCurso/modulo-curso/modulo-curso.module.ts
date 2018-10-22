import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursoComponent } from '../../MCurso/modulo-curso/listado-curso/listado-curso.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListadoCursoComponent]
})
export class ModuloCursoModule { }
