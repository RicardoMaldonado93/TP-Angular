import { Component, OnInit, Output } from '@angular/core';
import { curso } from '../curso/curso.component';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  @Output() ListaCursos: Array<curso> ;

  constructor() { }

  ngOnInit() {
  }

}
