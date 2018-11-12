import { Component, OnInit, Output, Input } from '@angular/core';
import { CursoComponent } from '../curso-item/curso-item.component';
import { EventEmitter } from 'events';
import { ICurso } from '../../model/interfaces/icurso';
import { CursoService } from '../../core/service/curso.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  @Output() ListaCursos;
  @Output() lista:Array<ICurso> = [];
  public service: CursoService;

  public id: string;
  public item : ICurso;

  constructor(private route: ActivatedRoute, private items: CursoService ) {
    this.route.params.subscribe(
      params => this.id = params['id']
    );
      
   }

  ngOnInit() {
    console.log( this.service.getCurso().subscribe(data =>{ this.item= data;}));
  }
  
  MostrarCursos() {
    console.log( "Listado Component->" + this.ListaCursos);
    
    
  }
}
