import { Component } from '@angular/core';
import { IAlumno } from './model/interfaces/ialumno';
import { IDocente } from './model/interfaces/idocente';
import { ICurso } from './model/interfaces/icurso';
import { EnumEstado } from './model/enums/enum-estado.enum';
import { DatePipe } from '@angular/common';
//import { ListadoCursoComponent } from './feature/curso-item/curso-item.component';
import { CursoModuleModule } from './feature/curso-module/curso-module.module'
import { ListadoCursoComponent } from './feature/listado-curso/listado-curso.component';
import { CursoComponent } from './feature/curso-item/curso-item.component';
import { CursoService } from './core/service/curso.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TP-Angular';

  public unAlumno:IAlumno;
  public unDocente:IDocente;
  public unCurso:ICurso;
  //public List: ListadoCursoComponent = new ListadoCursoComponent();
  

  constructor( private http:CursoService ){



     // this.List.ListaCursos.push(this.unCurso);  
    
      //this.Lis.MostrarCursos();
        
               
  }
 ngOnInit(){
       
    this.http.getData().subscribe( data => {console.log( data)});
 }
 
  ActualizarEstado(estado:EnumEstado):void{
    this.unCurso.estado = estado;
    //console.log("Estado del Curso: "+ estado );
  }

  public actualizarEstado($event):void {
    this.unCurso.estado = <EnumEstado>$event;
  }
  
}
