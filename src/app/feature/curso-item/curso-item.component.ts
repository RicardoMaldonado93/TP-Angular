import { Component, Input, Output, EventEmitter, HostBinding, OnInit, Query } from '@angular/core';
import { ICurso } from '../../model/interfaces/icurso';
import { EnumEstado } from '../../model/enums/enum-estado.enum';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from 'src/app/core/service/curso.service';



@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css']
  
})
export class CursoComponent implements ICurso{

  id: number;
  titulo: string;
  fechaInicio: number;
  fechaFin: number;
  asistentes: string[];
  profesor: string[];
  laboratorio: number;
  estado: number;

  item:ICurso;

  @Input() unCurso : ICurso;
  @Output() actualizarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @HostBinding('class.titulo') cardHeaderColor : Boolean = false;
  
  constructor( private ActivateRoute : ActivatedRoute, private servicio:CursoService ) { 
  }

  ngOnInit(){
     
      const id = +this.ActivateRoute.snapshot.params['id'];
      console.log(id);
      this.unCurso = this.servicio.getUnCurso(id);

  }

  Onclick($value){
    this.actualizarEstado.emit($value);
    if($value == 2 ){
      this.cardHeaderColor = true ;
    }

    if($value != 2 ){
      this.cardHeaderColor = false;
    }
    
    
  }
}
