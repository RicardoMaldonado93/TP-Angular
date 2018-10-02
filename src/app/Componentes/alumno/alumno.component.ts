import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from '../../Interfaces/ialumno';
@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  @Input() unAlumno:IAlumno;

  constructor() { }

  ngOnInit() {
  }

}
