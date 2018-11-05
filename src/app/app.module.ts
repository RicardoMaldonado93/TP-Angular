import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './shared/alumno/alumno.component';
import { ListadoCursoComponent } from './feature/listado-curso/listado-curso.component';
import { CursoComponent } from './feature/curso-item/curso-item.component';


import { AppRoutesModule } from './app-routes.module';
import { MenuComponent } from './core/menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent,
    AppComponent,  
    AlumnoComponent,
    ListadoCursoComponent,
    CursoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
