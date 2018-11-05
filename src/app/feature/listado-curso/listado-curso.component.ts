import { Component, OnInit, Output, Input , ViewChild} from '@angular/core';
import { CursoComponent } from '../curso-item/curso-item.component';
import { EventEmitter } from 'events';
import { ICurso } from '../../model/interfaces/icurso';
import { CursoService } from '../../core/service/curso.service';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  @Input() ListaCursos: Array<ICurso>;
  @Output() lista:Array<ICurso> = [];
  recurso;
  
  @ViewChild(CursoComponent)  hijo:CursoComponent;

  constructor(private service:CursoService) {
      this.ListaCursos = [];
   }

  ngOnInit() {
    this.service.getData().subscribe( data =>{ this.recurso=console.log(data)})
  }
  
  MostrarCursos() {
    console.log( "Listado Component->" + this.ListaCursos[0].curso);
    
  }
}
