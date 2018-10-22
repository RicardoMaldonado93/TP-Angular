import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from    './shared/alumno/alumno.component';
import { CursoComponent } from './feature/curso/curso.component';
import { DocenteComponent } from './shared/docente/docente.component';
import { ListadoCursoComponent } from './feature/listado-curso/listado-curso.component';

//import { modulo } from './MCurso/modulo-curso/modulo-curso.module';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    CursoComponent,
    DocenteComponent,
    ListadoCursoComponent,
    
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
