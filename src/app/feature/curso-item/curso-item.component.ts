import { Component, Input, Output, EventEmitter, HostBinding, OnInit } from '@angular/core';
import { ICurso } from '../../model/interfaces/icurso';
import { EnumEstado } from '../../model/enums/enum-estado.enum';
import { ActivatedRoute } from '@angular/router';

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

  @Input() unCurso : ICurso;
  @Output() actualizarEstado : EventEmitter<EnumEstado> = new EventEmitter<EnumEstado>();
  @HostBinding('class.titulo') cardHeaderColor : Boolean = false;
  

  constructor ( private route: ActivatedRoute){}


  ngOnInit(){
      let index = parseInt(this.route.snapshot.paramMap.get('id'));
      this.id= index;
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
