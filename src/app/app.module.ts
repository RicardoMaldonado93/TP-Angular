import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from    './shared/alumno/alumno.component';
import { CursoComponent } from './feature/curso-item/curso-item.component';
import { DocenteComponent } from './shared/docente/docente.component';
import { CursoModuleModule } from './feature/curso-module/curso-module.module';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
 //   CursoComponent,
    DocenteComponent,
    
    
  ],
  imports: [
    BrowserModule,
    CursoModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
