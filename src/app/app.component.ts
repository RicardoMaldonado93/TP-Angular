import { Component } from '@angular/core';
import { IAlumno } from './Interfaces/ialumno';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP-Angular';

  public unAlumno:IAlumno;

  constructor(){
    this.unAlumno = { nombre: "Ricardo", 
                      apellido:"Maldonado", 
                      dni: 37682324, 
                      legajo: 101169, 
                      curso:"Angular" };
  }
}
