import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CursoModuleModule  } from './feature/curso-module/curso-module.module';
import { AlumnoComponent } from './shared/alumno/alumno.component';
import { CursoComponent } from './feature/curso-item/curso-item.component';
import { ListadoCursoComponent } from './feature/listado-curso/listado-curso.component';

const ROUTES: Routes = [
                          { path:"alumno", component: AlumnoComponent},
                          { path:"curso/:id", component: CursoComponent},
                          { path:"cursos", component: ListadoCursoComponent },
                          { path: '**', redirectTo: '' },
                        ]; 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES ),
  ],

  exports: [ RouterModule ]
})
export class AppRoutesModule { }
