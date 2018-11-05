import { Component, OnInit, Output, Input , ViewChild} from '@angular/core';
import { CursoComponent } from '../curso-item/curso-item.component';
import { EventEmitter } from 'events';
import { ICurso } from '../../model/interfaces/icurso';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  @Input() ListaCursos: Array<ICurso>;
  @Output() lista:Array<ICurso> = [];
  
  @ViewChild(CursoComponent)  hijo:CursoComponent;

  constructor() {
      this.ListaCursos = [];
   }

  ngOnInit() {
    this.lista =  this.ListaCursos;
  }
  
  MostrarCursos() {
    console.log( "Listado Component->" + this.ListaCursos[0].curso);
    
  }
}
