import { Component, Output, EventEmitter } from '@angular/core';
import { IAlumno } from './model/interfaces/ialumno';
import { IDocente } from './model/interfaces/idocente';
import { ICurso } from './model/interfaces/icurso';
import { EnumEstado } from './model/enums/enum-estado.enum';
import { DatePipe } from '@angular/common';
import { CursoComponent } from './feature/curso-item/curso-item.component';
import { CursoModuleModule } from './feature/curso-module/curso-module.module'


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

  

  constructor(){


    this.unAlumno = { nombre: "Ricardo", 
                      apellido:"Maldonado", 
                      dni: 37682324, 
                      legajo: 101169, 
                      curso:"Angular" };

    this.unDocente = { nombre : 'Raul', 
                       apellido : 'Mendez',
                       curso : 'Matematica',
                       turno : 'Mañana'
                      };

    this.unCurso = {  id: 21354351,
                        curso:'Angular',
                        inicio : new Date('01/10/2018'),
                        finalizacion: new Date('01/11/2018'),
                        estado:EnumEstado.Activo,
                        profesor:'Alejandro'
                      };
        
                      
                      
  }

  ActualizarEstado(estado:EnumEstado):void{
    this.unCurso.estado = estado;
    console.log("Estado del Curso: "+ estado );
  }

  public actualizarEstado($event):void {
    this.unCurso.estado = <EnumEstado>$event;
  }
}
