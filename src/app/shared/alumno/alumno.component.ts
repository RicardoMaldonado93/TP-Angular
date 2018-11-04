import { Component, OnInit, Input, Output} from '@angular/core';
import { IAlumno } from '../../model/interfaces/ialumno';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  @Input() unAlumno:IAlumno;
  alumno : { nombre:string};

  constructor( private _route : ActivatedRoute ) { 
       
  }

  ngOnInit() {
    this.alumno = { nombre : this._route.snapshot.params.nombre};
    this._route.params.subscribe( (params : Params) =>{ this.alumno.nombre = params.nombre;}  )
    console.log( this.alumno.nombre);
    console.log ( this.alumno , this.unAlumno);
  }

}
