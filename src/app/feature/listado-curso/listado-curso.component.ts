import { Component, OnInit, Output, Input } from '@angular/core';
import { CursoComponent } from '../curso-item/curso-item.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  @Input() ListaCursos: Array<CursoComponent>;
 //@Output() MostrarLista: EventEmitter<CursoComponent> = new EventEmitter<CursoComponent>;
  constructor() {
      this.ListaCursos = [];
   }

  ngOnInit() {
  }
  
  MostrarCursos() {
    console.log('hola');
    
  }
}
