import { Component } from '@angular/core';
import { IAlumno } from './Interfaces/ialumno';
import { IDocente } from './Interfaces/idocente';
import { ICurso } from './Interfaces/icurso';
import { EnumEstado } from './Enums/enum-estado.enum';


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
   DI:Date = new Date('20/10/2018');
   DF:Date = new Date('08/12/2018');

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
                        inicio : this.DI,
                        finalizacion: this.DF,
                        estado:EnumEstado.iniciado,
                        profesor:'Alejandro'
                      };
        
  }
}
