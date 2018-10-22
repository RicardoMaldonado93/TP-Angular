import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from    './shared/alumno/alumno.component';
import { CursoComponent } from './MCurso/modulo-curso/curso/curso.component';
import { DocenteComponent } from './shared/docente/docente.component';
import { ListadoCursoComponent } from './MCurso/modulo-curso/listado-curso/listado-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CursoComponent,
    DocenteComponent,
    ListadoCursoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
