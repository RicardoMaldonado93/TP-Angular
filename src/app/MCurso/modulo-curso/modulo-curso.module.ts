import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCursoComponent } from '../../MCurso/modulo-curso/listado-curso/listado-curso.component';
import { AppComponent } from '../../app.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES : Routes = [
                          { path: '', redirectTo : 'home', pathMatch : 'full'},
                          { path: 'home', component: AppComponent},
                          { path: 'items', component : ListadoCursoComponent}
                        ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( ROUTES ),
  ],
  declarations: [ListadoCursoComponent]

})

export class ModuloCursoModule { }
