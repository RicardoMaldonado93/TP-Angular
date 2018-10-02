import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './Componentes/alumno/alumno.component';
import { CursoComponent } from './Componentes/curso/curso.component';
import { DocenteComponent } from './Componentes/docente/docente.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CursoComponent,
    DocenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
